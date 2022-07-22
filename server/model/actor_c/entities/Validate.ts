import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * validate
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Validate
 */
@Entity({
    name: 'validate'
})
export class Validate {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Validate
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 用户帐号ID
     *
     * @type { string }
     * @memberof Validate
     */
    @Column({ name: 'accountname' })
    accountname: string;
    /**
     * 日志创建的时间
     *
     * @type { string }
     * @memberof Validate
     */
    @Column({ name: 'logtime' })
    logtime: string;
    /**
     * 登录IP
     *
     * @type { string }
     * @memberof Validate
     */
    @Column({ name: 'loginip' })
    loginip: string;
    /**
     * 服务器id
     *
     * @type { number }
     * @memberof Validate
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
}