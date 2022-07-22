import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * combatlog
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Combatlog
 */
@Entity({
    name: 'combatlog'
})
export class Combatlog {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Combatlog
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * actorid
     *
     * @type { number }
     * @memberof Combatlog
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * type
     *
     * @type { number }
     * @memberof Combatlog
     */
    @Column({ name: 'type' })
    type: number;
    /**
     * result
     *
     * @type { number }
     * @memberof Combatlog
     */
    @Column({ name: 'result' })
    result: number;
    /**
     * targetid
     *
     * @type { number }
     * @memberof Combatlog
     */
    @Column({ name: 'targetid' })
    targetid: number;
    /**
     * targetname
     *
     * @type { string }
     * @memberof Combatlog
     */
    @Column({ name: 'targetname' })
    targetname: string;
    /**
     * rank
     *
     * @type { number }
     * @memberof Combatlog
     */
    @Column({ name: 'rank' })
    rank: number;
}