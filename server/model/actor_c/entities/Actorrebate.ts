import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorrebate
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorrebate
 */
@Entity({
    name: 'actorrebate'
})
export class Actorrebate {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 索引
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nIndex' })
    nIndex: number;
    /**
     * 玩家Id
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nActorId' })
    nActorId: number;
    /**
     * 返利序号
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nId' })
    nId: number;
    /**
     * 时间类型
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nTimeType' })
    nTimeType: number;
    /**
     * 开始时间
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nStartTime' })
    nStartTime: number;
    /**
     * 结束时间
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nEndTime' })
    nEndTime: number;
    /**
     * 从数据库中删除的时间
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nClearTime' })
    nClearTime: number;
    /**
     * 活动类型
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nOfflineType' })
    nOfflineType: number;
    /**
     * 立刻发放奖励
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nAtonce' })
    nAtonce: number;
    /**
     * 是否可叠加
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nOverlay' })
    nOverlay: number;
    /**
     * 累计充值元宝数
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nYBValue' })
    nYBValue: number;
    /**
     * 领取状态
     *
     * @type { number }
     * @memberof Actorrebate
     */
    @Column({ name: 'nStatus' })
    nStatus: number;
}