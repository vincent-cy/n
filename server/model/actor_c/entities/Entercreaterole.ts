import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * entercreaterole
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Entercreaterole
 */
@Entity({
    name: 'entercreaterole'
})
export class Entercreaterole {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Entercreaterole
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 账号
     *
     * @type { string }
     * @memberof Entercreaterole
     */
    @Column({ name: 'accountname' })
    accountname: string;
    /**
     * 日志创建的时间
     *
     * @type { string }
     * @memberof Entercreaterole
     */
    @Column({ name: 'logtime' })
    logtime: string;
    /**
     * 登录ip
     *
     * @type { string }
     * @memberof Entercreaterole
     */
    @Column({ name: 'loginip' })
    loginip: string;
    /**
     * 服务器id
     *
     * @type { number }
     * @memberof Entercreaterole
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
}