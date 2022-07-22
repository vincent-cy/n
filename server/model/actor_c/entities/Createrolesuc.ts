import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * createrolesuc
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Createrolesuc
 */
@Entity({
    name: 'createrolesuc'
})
export class Createrolesuc {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Createrolesuc
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 用户账号
     *
     * @type { string }
     * @memberof Createrolesuc
     */
    @Column({ name: 'accountname' })
    accountname: string;
    /**
     * 角色id
     *
     * @type { number }
     * @memberof Createrolesuc
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 日志创建的时间
     *
     * @type { string }
     * @memberof Createrolesuc
     */
    @Column({ name: 'logtime' })
    logtime: string;
    /**
     * 登录ip
     *
     * @type { string }
     * @memberof Createrolesuc
     */
    @Column({ name: 'loginip' })
    loginip: string;
    /**
     * 服务器id
     *
     * @type { number }
     * @memberof Createrolesuc
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
}