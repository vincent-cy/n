import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * combatgame
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Combatgame
 */
@Entity({
    name: 'combatgame'
})
export class Combatgame {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Combatgame
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Combatgame
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 连胜次数
     *
     * @type { number }
     * @memberof Combatgame
     */
    @Column({ name: 'winningtimes' })
    winningtimes: number;
    /**
     * 今日已挑战的次数
     *
     * @type { number }
     * @memberof Combatgame
     */
    @Column({ name: 'chagangetimes' })
    chagangetimes: number;
    /**
     * 下次可以挑战的时间
     *
     * @type { number }
     * @memberof Combatgame
     */
    @Column({ name: 'nextchagangetime' })
    nextchagangetime: number;
    /**
     * 今天银两刷新的次数
     *
     * @type { number }
     * @memberof Combatgame
     */
    @Column({ name: 'refreshtimes' })
    refreshtimes: number;
    /**
     * 领取奖励的排名
     *
     * @type { number }
     * @memberof Combatgame
     */
    @Column({ name: 'awardrank' })
    awardrank: number;
    /**
     * 增加的挑战次数
     *
     * @type { number }
     * @memberof Combatgame
     */
    @Column({ name: 'addchagneTimes' })
    addchagneTimes: number;
    /**
     * 是否显示提示
     *
     * @type { number }
     * @memberof Combatgame
     */
    @Column({ name: 'bshowflag' })
    bshowflag: number;
    /**
     * 预留
     *
     * @type { number }
     * @memberof Combatgame
     */
    @Column({ name: 'reserver' })
    reserver: number;
}