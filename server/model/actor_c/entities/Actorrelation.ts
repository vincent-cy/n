import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorrelation
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorrelation
 */
@Entity({
    name: 'actorrelation'
})
export class Actorrelation {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorrelation
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * actorid
     *
     * @type { number }
     * @memberof Actorrelation
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * relationtype
     *
     * @type { number }
     * @memberof Actorrelation
     */
    @Column({ name: 'relationtype' })
    relationtype: number;
    /**
     * relationid
     *
     * @type { number }
     * @memberof Actorrelation
     */
    @Column({ name: 'relationid' })
    relationid: number;
    /**
     * param
     *
     * @type { number }
     * @memberof Actorrelation
     */
    @Column({ name: 'param' })
    param: number;
}