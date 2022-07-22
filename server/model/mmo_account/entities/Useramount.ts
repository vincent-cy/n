import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * useramount
 * @Date 2022/7/22 15:16:22
 * @author vincent
 * @export
 * @class Useramount
 */
@Entity({
    name: 'useramount'
})
export class Useramount {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Useramount
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * userid
     *
     * @type { number }
     * @memberof Useramount
     */
    @Column({ name: 'userid' })
    userid: number;
    /**
     * 用户余额，单位是元宝
     *
     * @type { number }
     * @memberof Useramount
     */
    @Column({ name: 'amount' })
    amount: number;
    /**
     * 用户总计充值元宝统计
     *
     * @type { number }
     * @memberof Useramount
     */
    @Column({ name: 'amountsum' })
    amountsum: number;
    /**
     * 用户总计充值次数，每次充值都递增此值
     *
     * @type { number }
     * @memberof Useramount
     */
    @Column({ name: 'paysum' })
    paysum: number;
    /**
     * 用户首次充值时间
     *
     * @type { string }
     * @memberof Useramount
     */
    @Column({ name: 'firstpaytime' })
    firstpaytime: string;
    /**
     * 用户首次充值元宝数量
     *
     * @type { number }
     * @memberof Useramount
     */
    @Column({ name: 'firstpayamount' })
    firstpayamount: number;
    /**
     * 用户最后一次充值时间
     *
     * @type { string }
     * @memberof Useramount
     */
    @Column({ name: 'lastpaytime' })
    lastpaytime: string;
    /**
     * 用户最后一次充值的元宝数量
     *
     * @type { number }
     * @memberof Useramount
     */
    @Column({ name: 'lastpayamount' })
    lastpayamount: number;
}