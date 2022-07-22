import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * guildskill
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Guildskill
 */
@Entity({
    name: 'guildskill'
})
export class Guildskill {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Guildskill
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 帮派id
     *
     * @type { number }
     * @memberof Guildskill
     */
    @Column({ name: 'guildid' })
    guildid: number;
    /**
     * 帮派技能
     *
     * @type { number }
     * @memberof Guildskill
     */
    @Column({ name: 'skillid' })
    skillid: number;
    /**
     * 帮派技能等级
     *
     * @type { number }
     * @memberof Guildskill
     */
    @Column({ name: 'skilllevel' })
    skilllevel: number;
    /**
     * 保留
     *
     * @type { number }
     * @memberof Guildskill
     */
    @Column({ name: 'reserver' })
    reserver: number;
}