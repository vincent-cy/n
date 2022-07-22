import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * guildwarhistory
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Guildwarhistory
 */
@Entity({
    name: 'guildwarhistory'
})
export class Guildwarhistory {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Guildwarhistory
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 帮派id
     *
     * @type { number }
     * @memberof Guildwarhistory
     */
    @Column({ name: 'guildid' })
    guildid: number;
    /**
     * 帮派战对方的帮派id
     *
     * @type { number }
     * @memberof Guildwarhistory
     */
    @Column({ name: 'warguildid' })
    warguildid: number;
    /**
     * 杀敌数量
     *
     * @type { number }
     * @memberof Guildwarhistory
     */
    @Column({ name: 'pkcount' })
    pkcount: number;
    /**
     * 己方死亡数量
     *
     * @type { number }
     * @memberof Guildwarhistory
     */
    @Column({ name: 'diecount' })
    diecount: number;
    /**
     * 结束时间
     *
     * @type { string }
     * @memberof Guildwarhistory
     */
    @Column({ name: 'endtime' })
    endtime: string;
}