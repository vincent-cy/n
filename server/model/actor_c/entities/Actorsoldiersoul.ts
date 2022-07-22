import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorsoldiersoul
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorsoldiersoul
 */
@Entity({
    name: 'actorsoldiersoul'
})
export class Actorsoldiersoul {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorsoldiersoul
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Actorsoldiersoul
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 兵魂索引
     *
     * @type { number }
     * @memberof Actorsoldiersoul
     */
    @Column({ name: 'soldiersoulindex' })
    soldiersoulindex: number;
    /**
     * 是否附身
     *
     * @type { number }
     * @memberof Actorsoldiersoul
     */
    @Column({ name: 'isAttach' })
    isAttach: number;
    /**
     * 兵魂技能等级
     *
     * @type { number }
     * @memberof Actorsoldiersoul
     */
    @Column({ name: 'skillLevel' })
    skillLevel: number;
    /**
     * 兵魂星星进度
     *
     * @type { number }
     * @memberof Actorsoldiersoul
     */
    @Column({ name: 'starProgress' })
    starProgress: number;
}