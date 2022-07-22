import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * brothgrouplist
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Brothgrouplist
 */
@Entity({
    name: 'brothgrouplist'
})
export class Brothgrouplist {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Brothgrouplist
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 战队名称
     *
     * @type { string }
     * @memberof Brothgrouplist
     */
    @Column({ name: 'gname' })
    gname: string;
    /**
     * 逻辑服的索引号
     *
     * @type { number }
     * @memberof Brothgrouplist
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
    /**
     * 队长id
     *
     * @type { number }
     * @memberof Brothgrouplist
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 战队积分
     *
     * @type { number }
     * @memberof Brothgrouplist
     */
    @Column({ name: 'score' })
    score: number;
    /**
     * 保留字段
     *
     * @type { number }
     * @memberof Brothgrouplist
     */
    @Column({ name: 'reser' })
    reser: number;
}