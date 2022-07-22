import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actoractivity
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actoractivity
 */
@Entity({
    name: 'actoractivity'
})
export class Actoractivity {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actoractivity
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * actorid
     *
     * @type { string }
     * @memberof Actoractivity
     */
    @Column({ name: 'actorid' })
    actorid: string;
    /**
     * nId
     *
     * @type { number }
     * @memberof Actoractivity
     */
    @Column({ name: 'nId' })
    nId: number;
    /**
     * nActivityType
     *
     * @type { number }
     * @memberof Actoractivity
     */
    @Column({ name: 'nActivityType' })
    nActivityType: number;
    /**
     * nExpiredTime
     *
     * @type { number }
     * @memberof Actoractivity
     */
    @Column({ name: 'nExpiredTime' })
    nExpiredTime: number;
}