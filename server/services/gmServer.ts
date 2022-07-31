import { getTreeRepository, Repository } from "typeorm";
import { Actors } from "../model/actor_c/entities/Actors";
import { Feecallback } from "../model/actor_c/entities/Feecallback";
import { Mail } from "../model/actor_c/entities/Mail";
import { Servermail } from "../model/actor_c/entities/Servermail";
import { Servermailattach } from "../model/actor_c/entities/Servermailattach";
import { Mailattach } from "../model/actor_c/entities/Mailattach";
import { Actorbagitem } from "../model/actor_c/entities/Actorbagitem";


let gm_service: GmService

export class GmService {
    readonly feeCallbackRepository: Repository<Feecallback>
    readonly actorRepository: Repository<Actors>
    readonly actorbagitemRepository: Repository<Actorbagitem>
    readonly mailRepository: Repository<Mail>
    readonly servermailRepository: Repository<Servermail>
    readonly servermailAttachRepository: Repository<Servermailattach>
    readonly mailAttachRepository: Repository<Mailattach>
    constructor() {
        // 角色
        this.actorRepository = getTreeRepository(Actors, 'actor_1');
        // 邮箱反馈
        this.feeCallbackRepository = getTreeRepository(Feecallback, 'actor_1');

        this.mailRepository = getTreeRepository(Mail, 'actor_1');

        this.servermailRepository = getTreeRepository(Servermail, 'actor_1');

        this.servermailAttachRepository = getTreeRepository(Servermailattach, 'actor_1');

        this.mailAttachRepository = getTreeRepository(Mailattach, 'actor_1');

        this.actorbagitemRepository = getTreeRepository(Actorbagitem, 'actor_1');
    }

    findActorByActorId = async ({ actorid }) => {
        return await this.actorRepository.findOne({ where: actorid })
    }

    getActorMailCount = async ({ actorid }) => {
        return await this.mailRepository.count({ where: { actorid } })
    }

    sendMoney = async ({ actorid, prodid }: { actorid: number, prodid: string }) => {
        const actor = await this.findActorByActorId({ actorid })
        if (actor) {
            const payload = {
                pfid: '10003',
                prodid,
                num: 1,
                actorid: actor.actorid,
                account: actor.accountname,
                token: '',
                created_at: new Date(),
                oldserverid: actor.oldserverindex,
                flag: 0,
                amt: '0',
            };
            return await this.feeCallbackRepository.save(payload)
        }
    }

    getMailCount = async ({ actorid }) => {
        return await this.mailRepository.count({
            where: { actorid, isdel: 0 },
        })
    }


    sendEquipment = async ({ actorid, itemid, count, }: { actorid: number, itemid: string, count: number }) => {
        const actor = await this.findActorByActorId({ actorid })
        const mailCount = await this.getActorMailCount({ actorid })
        if (mailCount > 150) {
            return false
        }
        if (actor) {
            const payload = {
                actorid,
                title: '-GM邮件-',
                content: '物品已送到',
            };
            const { servermailid } = await this.servermailRepository.save(payload);

            const item = {
                id: itemid,
                count,
                servermailid,
            };
            return await this.servermailAttachRepository.save(item)
        }
    }


    clearMail = async ({ actorid }) => {
        const online = await this.getActorStatus({ actorid })
        if (!online) {
            await this.mailRepository.delete({ actorid })
            await this.mailAttachRepository.delete({ actorid })
            return true
        }
    }

    getActorStatus = async ({ actorid }) => {
        const actor = await this.actorRepository.findOne({ where: { actorid }, select: ['onlinestatus'] })
        if (actor) {
            return (actor.onlinestatus === 1);
        }
    }


    clearPackage = async ({ actorid }) => {
        const online = await this.getActorStatus({ actorid })
        if (!online) {
            await this.actorbagitemRepository.delete({ actorid })
            return true
        }
    }


    sendBroadcost = async ({ qid, id, count, title, content,
        minviplevel = 0,
        maxviplevel = 0,
        minlevel = 0,
        maxlevel = 0,
        minregistertime = 0,
        maxregistertime = 0,
        minlogintime = 0,
        maxlogintime = 0,
        online = 0,
    }) => {
        // const _db = this.app.mysql.get(qu_with_db[qid]);
        const payload = {
            title,
            content,
            minviplevel,
            maxviplevel,
            minlevel,
            maxlevel,
            minregistertime,
            maxregistertime,
            minlogintime,
            maxlogintime,
            online,
        };
        const {servermailid} =  await this.servermailRepository.save(payload)
        await this.servermailAttachRepository.save({
            servermailid,
            id, count
        })
        return '全服邮件发送成功';
    }
}

export function init_gm_service() {
    if (!gm_service) {
        gm_service = new GmService()
    }
}

export {
    gm_service
}