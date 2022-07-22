import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * enterplatform
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Enterplatform
 */
@Entity({
    name: 'enterplatform'
})
export class Enterplatform {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Enterplatform
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 用户账号
     *
     * @type { string }
     * @memberof Enterplatform
     */
    @Column({ name: 'accountname' })
    accountname: string;
    /**
     * 日志时间
     *
     * @type { string }
     * @memberof Enterplatform
     */
    @Column({ name: 'logtime' })
    logtime: string;
    /**
     * 登录ip
     *
     * @type { string }
     * @memberof Enterplatform
     */
    @Column({ name: 'loginip' })
    loginip: string;
    /**
     * 服务器id
     *
     * @type { number }
     * @memberof Enterplatform
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
}