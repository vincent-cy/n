import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * consignmentincome
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Consignmentincome
 */
@Entity({
    name: 'consignmentincome'
})
export class Consignmentincome {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Consignmentincome
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Consignmentincome
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 寄卖收益
     *
     * @type { number }
     * @memberof Consignmentincome
     */
    @Column({ name: 'income' })
    income: number;
    /**
     * 服务器id
     *
     * @type { number }
     * @memberof Consignmentincome
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
}