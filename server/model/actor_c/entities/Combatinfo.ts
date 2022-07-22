import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * combatinfo
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Combatinfo
 */
@Entity({
    name: 'combatinfo'
})
export class Combatinfo {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Combatinfo
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色id
     *
     * @type { number }
     * @memberof Combatinfo
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 当前排名
     *
     * @type { number }
     * @memberof Combatinfo
     */
    @Column({ name: 'currank' })
    currank: number;
    /**
     * 最高排名
     *
     * @type { number }
     * @memberof Combatinfo
     */
    @Column({ name: 'maxrank' })
    maxrank: number;
    /**
     * 上次排名
     *
     * @type { number }
     * @memberof Combatinfo
     */
    @Column({ name: 'lastrank' })
    lastrank: number;
    /**
     * 战力积分
     *
     * @type { number }
     * @memberof Combatinfo
     */
    @Column({ name: 'combatscore' })
    combatscore: number;
    /**
     * 挑战次数
     *
     * @type { number }
     * @memberof Combatinfo
     */
    @Column({ name: 'challegenum' })
    challegenum: number;
    /**
     * 筛选次数
     *
     * @type { number }
     * @memberof Combatinfo
     */
    @Column({ name: 'picknum' })
    picknum: number;
    /**
     * 清零时间
     *
     * @type { number }
     * @memberof Combatinfo
     */
    @Column({ name: 'cleartime' })
    cleartime: number;
    /**
     * cd标志
     *
     * @type { number }
     * @memberof Combatinfo
     */
    @Column({ name: 'cdflag' })
    cdflag: number;
}