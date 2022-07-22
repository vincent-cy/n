import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorpets
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorpets
 */
@Entity({
    name: 'actorpets'
})
export class Actorpets {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorpets
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家的actorid
     *
     * @type { string }
     * @memberof Actorpets
     */
    @Column({ name: 'actorid' })
    actorid: string;
    /**
     * 经验
     *
     * @type { string }
     * @memberof Actorpets
     */
    @Column({ name: 'exp' })
    exp: string;
    /**
     * 当前的血
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'hp' })
    hp: number;
    /**
     * 当前的蓝
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'mp' })
    mp: number;
    /**
     * 名字
     *
     * @type { string }
     * @memberof Actorpets
     */
    @Column({ name: 'name' })
    name: string;
    /**
     * 转数
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'circle' })
    circle: number;
    /**
     * 等级
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'level' })
    level: number;
    /**
     * 英雄的id,状态，头像合并起来的
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'ids' })
    ids: number;
    /**
     * 模型id
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'modelid' })
    modelid: number;
    /**
     * 武器的外观
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'weaponappear' })
    weaponappear: number;
    /**
     * 评分
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'score' })
    score: number;
    /**
     * 职业
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'vocation' })
    vocation: number;
    /**
     * 性别
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'sex' })
    sex: number;
    /**
     * 翅膀的外观
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'swingappear' })
    swingappear: number;
    /**
     * 保留的
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'reserver1' })
    reserver1: number;
    /**
     * 预留的2
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'reserver2' })
    reserver2: number;
    /**
     * 英雄阶
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'stage' })
    stage: number;
    /**
     * 英雄体力
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'bodyforce' })
    bodyforce: number;
    /**
     * 英雄祝福值
     *
     * @type { number }
     * @memberof Actorpets
     */
    @Column({ name: 'bless' })
    bless: number;
}