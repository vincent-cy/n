import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * guildapplyresult
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Guildapplyresult
 */
@Entity({
    name: 'guildapplyresult'
})
export class Guildapplyresult {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Guildapplyresult
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Guildapplyresult
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 申请结果
     *
     * @type { number }
     * @memberof Guildapplyresult
     */
    @Column({ name: 'applyresult' })
    applyresult: number;
}