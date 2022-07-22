import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * entergame
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Entergame
 */
@Entity({
    name: 'entergame'
})
export class Entergame {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Entergame
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色id
     *
     * @type { number }
     * @memberof Entergame
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 用户账号
     *
     * @type { string }
     * @memberof Entergame
     */
    @Column({ name: 'accountname' })
    accountname: string;
    /**
     * 日志创建的时间
     *
     * @type { string }
     * @memberof Entergame
     */
    @Column({ name: 'logtime' })
    logtime: string;
    /**
     * 登录ip
     *
     * @type { string }
     * @memberof Entergame
     */
    @Column({ name: 'loginip' })
    loginip: string;
    /**
     * 服务器id
     *
     * @type { number }
     * @memberof Entergame
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
}