import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorreviveduration
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorreviveduration
 */
@Entity({
    name: 'actorreviveduration'
})
export class Actorreviveduration {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorreviveduration
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色ID
     *
     * @type { number }
     * @memberof Actorreviveduration
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 复活特权ID
     *
     * @type { number }
     * @memberof Actorreviveduration
     */
    @Column({ name: 'idmakelong' })
    idmakelong: number;
    /**
     * 持续时间
     *
     * @type { number }
     * @memberof Actorreviveduration
     */
    @Column({ name: 'remaintime' })
    remaintime: number;
}