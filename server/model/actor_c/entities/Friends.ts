import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * friends
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Friends
 */
@Entity({
    name: 'friends'
})
export class Friends {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Friends
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家的id
     *
     * @type { number }
     * @memberof Friends
     */
    @Column({ name: 'nactorid' })
    nactorid: number;
    /**
     * 好友的id
     *
     * @type { number }
     * @memberof Friends
     */
    @Column({ name: 'friendid' })
    friendid: number;
    /**
     * 关系 1 好友 2 陌生人 3 仇敌 4 黑名单
     *
     * @type { number }
     * @memberof Friends
     */
    @Column({ name: 'ntype' })
    ntype: number;
    /**
     * 亲密度
     *
     * @type { number }
     * @memberof Friends
     */
    @Column({ name: 'nintimacy' })
    nintimacy: number;
    /**
     * 战队id
     *
     * @type { string }
     * @memberof Friends
     */
    @Column({ name: 'warteamid' })
    warteamid: string;
    /**
     * 预留
     *
     * @type { number }
     * @memberof Friends
     */
    @Column({ name: 'reserver' })
    reserver: number;
    /**
     * 生成关系的时间
     *
     * @type { number }
     * @memberof Friends
     */
    @Column({ name: 'dotime' })
    dotime: number;
    /**
     * 颜色
     *
     * @type { number }
     * @memberof Friends
     */
    @Column({ name: 'color' })
    color: number;
}