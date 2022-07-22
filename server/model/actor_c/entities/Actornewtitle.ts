import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actornewtitle
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actornewtitle
 */
@Entity({
    name: 'actornewtitle'
})
export class Actornewtitle {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actornewtitle
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * actorid
     *
     * @type { number }
     * @memberof Actornewtitle
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * idmakelong
     *
     * @type { number }
     * @memberof Actornewtitle
     */
    @Column({ name: 'idmakelong' })
    idmakelong: number;
    /**
     * remaintime
     *
     * @type { number }
     * @memberof Actornewtitle
     */
    @Column({ name: 'remaintime' })
    remaintime: number;
}