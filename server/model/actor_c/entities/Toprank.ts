import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * toprank
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Toprank
 */
@Entity({
    name: 'toprank'
})
export class Toprank {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Toprank
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家的actorid
     *
     * @type { number }
     * @memberof Toprank
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 排名的id
     *
     * @type { number }
     * @memberof Toprank
     */
    @Column({ name: 'rankid' })
    rankid: number;
    /**
     * 排行名次
     *
     * @type { number }
     * @memberof Toprank
     */
    @Column({ name: 'rank' })
    rank: number;
    /**
     * 服务器编号
     *
     * @type { number }
     * @memberof Toprank
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
    /**
     * 记录排行key1的值 各个排行榜有不同的定义
     *
     * @type { string }
     * @memberof Toprank
     */
    @Column({ name: 'val' })
    val: string;
    /**
     * 记录排行key2的值 各个排行榜有不同的定义
     *
     * @type { string }
     * @memberof Toprank
     */
    @Column({ name: 'val2' })
    val2: string;
    /**
     * 描述字符串1
     *
     * @type { string }
     * @memberof Toprank
     */
    @Column({ name: 'desc1' })
    desc1: string;
    /**
     * 描述字符串2
     *
     * @type { string }
     * @memberof Toprank
     */
    @Column({ name: 'desc2' })
    desc2: string;
}