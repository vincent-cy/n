import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * feecallback
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Feecallback
 */
@Entity({
    name: 'feecallback'
})
export class Feecallback {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Feecallback
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 平台id
     *
     * @type { string }
     * @memberof Feecallback
     */
    @Column({ name: 'pfid' })
    pfid: string;
    /**
     * 服务器id
     *
     * @type { number }
     * @memberof Feecallback
     */
    @Column({ name: 'serverid' })
    serverid: number;
    /**
     * 角色id
     *
     * @type { number }
     * @memberof Feecallback
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 账户名
     *
     * @type { string }
     * @memberof Feecallback
     */
    @Column({ name: 'account' })
    account: string;
    /**
     * 商品id
     *
     * @type { string }
     * @memberof Feecallback
     */
    @Column({ name: 'prodid' })
    prodid: string;
    /**
     * num
     *
     * @type { number }
     * @memberof Feecallback
     */
    @Column({ name: 'num' })
    num: number;
    /**
     * 验证
     *
     * @type { string }
     * @memberof Feecallback
     */
    @Column({ name: 'token' })
    token: string;
    /**
     * 检测标志, 0待通知，1通知中，2已通知，3充值中，4已充值
     *
     * @type { number }
     * @memberof Feecallback
     */
    @Column({ name: 'flag' })
    flag: number;
    /**
     * 记录时间
     *
     * @type { string }
     * @memberof Feecallback
     */
    @Column({ name: 'created_at' })
    createdAt: string;
    /**
     * 折扣后充值金额
     *
     * @type { string }
     * @memberof Feecallback
     */
    @Column({ name: 'amt' })
    amt: string;
    /**
     * 原服serverid
     *
     * @type { number }
     * @memberof Feecallback
     */
    @Column({ name: 'oldserverid' })
    oldserverid: number;
}