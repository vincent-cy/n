import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * clickcreaterole
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Clickcreaterole
 */
@Entity({
    name: 'clickcreaterole'
})
export class Clickcreaterole {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Clickcreaterole
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 用户账号
     *
     * @type { string }
     * @memberof Clickcreaterole
     */
    @Column({ name: 'accountname' })
    accountname: string;
    /**
     * 日志创建的时间
     *
     * @type { string }
     * @memberof Clickcreaterole
     */
    @Column({ name: 'logtime' })
    logtime: string;
    /**
     * 登录ip
     *
     * @type { string }
     * @memberof Clickcreaterole
     */
    @Column({ name: 'loginip' })
    loginip: string;
    /**
     * 服务器id
     *
     * @type { number }
     * @memberof Clickcreaterole
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
}