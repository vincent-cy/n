import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * combatrecord
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Combatrecord
 */
@Entity({
    name: 'combatrecord'
})
export class Combatrecord {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 对方的id
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'tagetId' })
    tagetId: number;
    /**
     * 对方的姓名
     *
     * @type { string }
     * @memberof Combatrecord
     */
    @Column({ name: 'tagetname' })
    tagetname: string;
    /**
     * 胜负关系
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'nvictory' })
    nvictory: number;
    /**
     * 挑战的时间
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'ntime' })
    ntime: number;
    /**
     * 挑战后的排名
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'nranking' })
    nranking: number;
    /**
     * 奖励的参数类型1
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'nawardtype1' })
    nawardtype1: number;
    /**
     * 奖励的参数类型2
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'nawardtype2' })
    nawardtype2: number;
    /**
     * 奖励的参数类型3
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'nawardtype3' })
    nawardtype3: number;
    /**
     * 奖励的值1
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'nawardvalue1' })
    nawardvalue1: number;
    /**
     * 奖励的值2
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'nawardvalue2' })
    nawardvalue2: number;
    /**
     * 奖励的值3
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'nawardvalue3' })
    nawardvalue3: number;
    /**
     * 预留
     *
     * @type { number }
     * @memberof Combatrecord
     */
    @Column({ name: 'reserver' })
    reserver: number;
}