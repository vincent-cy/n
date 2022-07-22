import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * activitydata
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Activitydata
 */
@Entity({
    name: 'activitydata'
})
export class Activitydata {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Activitydata
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * nId
     *
     * @type { number }
     * @memberof Activitydata
     */
    @Column({ name: 'nId' })
    nId: number;
    /**
     * nActivityType
     *
     * @type { number }
     * @memberof Activitydata
     */
    @Column({ name: 'nActivityType' })
    nActivityType: number;
    /**
     * nTimeType
     *
     * @type { number }
     * @memberof Activitydata
     */
    @Column({ name: 'nTimeType' })
    nTimeType: number;
    /**
     * nStartTime
     *
     * @type { number }
     * @memberof Activitydata
     */
    @Column({ name: 'nStartTime' })
    nStartTime: number;
    /**
     * nEndTime
     *
     * @type { number }
     * @memberof Activitydata
     */
    @Column({ name: 'nEndTime' })
    nEndTime: number;
}