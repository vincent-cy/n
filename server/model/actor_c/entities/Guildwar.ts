import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * guildwar
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Guildwar
 */
@Entity({
    name: 'guildwar'
})
export class Guildwar {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Guildwar
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 帮派id
     *
     * @type { number }
     * @memberof Guildwar
     */
    @Column({ name: 'guildid' })
    guildid: number;
    /**
     * 目前两帮派的关系
     *
     * @type { number }
     * @memberof Guildwar
     */
    @Column({ name: 'relationship' })
    relationship: number;
    /**
     * 双方的状态
     *
     * @type { number }
     * @memberof Guildwar
     */
    @Column({ name: 'state' })
    state: number;
    /**
     * 对方帮派的id
     *
     * @type { number }
     * @memberof Guildwar
     */
    @Column({ name: 'warguildId' })
    warguildId: number;
    /**
     * 杀敌数目
     *
     * @type { number }
     * @memberof Guildwar
     */
    @Column({ name: 'pkcount' })
    pkcount: number;
    /**
     * 己方死亡数量
     *
     * @type { number }
     * @memberof Guildwar
     */
    @Column({ name: 'diecount' })
    diecount: number;
    /**
     * 改变状态的时间
     *
     * @type { number }
     * @memberof Guildwar
     */
    @Column({ name: 'nexttime' })
    nexttime: number;
}