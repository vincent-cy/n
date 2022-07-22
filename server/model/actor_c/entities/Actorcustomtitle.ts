import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorcustomtitle
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorcustomtitle
 */
@Entity({
    name: 'actorcustomtitle'
})
export class Actorcustomtitle {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorcustomtitle
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * actorid
     *
     * @type { number }
     * @memberof Actorcustomtitle
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * idmakelong
     *
     * @type { number }
     * @memberof Actorcustomtitle
     */
    @Column({ name: 'idmakelong' })
    idmakelong: number;
    /**
     * remaintime
     *
     * @type { number }
     * @memberof Actorcustomtitle
     */
    @Column({ name: 'remaintime' })
    remaintime: number;
}