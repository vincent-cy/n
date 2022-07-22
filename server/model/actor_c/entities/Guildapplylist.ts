import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * guildapplylist
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Guildapplylist
 */
@Entity({
    name: 'guildapplylist'
})
export class Guildapplylist {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Guildapplylist
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 行会id
     *
     * @type { string }
     * @memberof Guildapplylist
     */
    @Column({ name: 'guildid' })
    guildid: string;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Guildapplylist
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 申请的时间
     *
     * @type { number }
     * @memberof Guildapplylist
     */
    @Column({ name: 'applytime' })
    applytime: number;
}