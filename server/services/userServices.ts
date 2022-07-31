import { getTreeRepository, Repository } from "typeorm";
import { Globaluser } from "../model/mmo_account/entities/Globaluser";
import { User } from "../model/bx_web/entities/User";

const crypto = require('crypto');

const SECRET_KEY = "Wjdskf_1xxcweWes3$";

const md5password = (password) => {
    const md5 = crypto.createHash('md5');
    const str = `password=${password}$key=${SECRET_KEY}`;
    const result = md5.update(str).digest('hex'); //hex表示拿到最终为十六进制
    return result;
}

let user_service: UserService
class UserService {
    readonly globalUserRepository: Repository<Globaluser>
    readonly webUserRepository: Repository<User>
    constructor() {
        this.globalUserRepository = getTreeRepository(Globaluser, 'account');
        this.webUserRepository = getTreeRepository(User, 'bx_web');
    }

    findUser = async ({ userid }: { userid: number }) => {
        return await this.globalUserRepository.findOne({ where: { userid } })
    }

    allUser = async () => {
        return await this.globalUserRepository.findAndCount()
    }

    updatePassword = async ({ userid }: { userid: number }) => {
        return await this.globalUserRepository.update(userid, {})
    }

    login = async ({ username, password }: { username: string, password: string }) => {
        const account = await this.webUserRepository.findOne({
            where: {
                username
            }
        })
        if (account && (md5password(password) === account.password)) {
            return account
        }
    }

    register = async ({ username, password }: { username: string, password: string }) => {

        const user = await this.webUserRepository.findOne({
            where: {
                username
            }
        })
        if (!user) {
            const newAccount = await this.webUserRepository.save({
                username,
                password: md5password(password),
                regTime: new Date()
            })
            return newAccount;
        }
    }

    changePassword = async ({ username, password, newPassword }: { username: string, password: string, newPassword: string }) => {
        const user = await this.webUserRepository.findOne({
            where: {
                username,
                password: md5password(password)
            }
        })
        if (user) {
            const account = await this.globalUserRepository.findOne({
                where: {
                    account: user.username as string,
                }
            })
            if(!account){ // 没有进入过游戏
                await this.webUserRepository.save({...user,password: md5password(newPassword)})
                return true
            }else if(account.passwd === md5password(password)){
                await this.webUserRepository.save({...user,password: md5password(newPassword)})
                await this.globalUserRepository.save({...account, passwd: md5password(newPassword)})
                return true
            }
        }
    }
}


export function init_user_service() {
    user_service = new UserService()
}

export {
    user_service
} 