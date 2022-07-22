import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorhallows
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorhallows
 */
@Entity({
    name: 'actorhallows'
})
export class Actorhallows {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色ID
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 圣物兵魂升星1
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsStar1' })
    HallowsStar1: number;
    /**
     * 圣物兵魂升星2
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsStar2' })
    HallowsStar2: number;
    /**
     * 圣物兵魂升星3
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsStar3' })
    HallowsStar3: number;
    /**
     * 圣物兵魂升星3
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsStar4' })
    HallowsStar4: number;
    /**
     * 圣物兵魂升阶1
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsLorder1' })
    HallowsLorder1: number;
    /**
     * 圣物兵魂升阶2
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsLorder2' })
    HallowsLorder2: number;
    /**
     * 圣物兵魂升阶3
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsLorder3' })
    HallowsLorder3: number;
    /**
     * 圣物兵魂升阶4
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsLorder4' })
    HallowsLorder4: number;
    /**
     * 圣物兵魂升级1
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsLv1' })
    HallowsLv1: number;
    /**
     * 圣物兵魂升级2
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsLv2' })
    HallowsLv2: number;
    /**
     * 圣物兵魂升级3
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsLv3' })
    HallowsLv3: number;
    /**
     * 圣物兵魂升级4
     *
     * @type { number }
     * @memberof Actorhallows
     */
    @Column({ name: 'HallowsLv4' })
    HallowsLv4: number;
    /**
     * 圣物极品属性1
     *
     * @type { string }
     * @memberof Actorhallows
     */
    @Column({ name: 'bestAttr1' })
    bestAttr1: string;
    /**
     * 圣物极品属性2
     *
     * @type { string }
     * @memberof Actorhallows
     */
    @Column({ name: 'bestAttr2' })
    bestAttr2: string;
    /**
     * 圣物极品属性3
     *
     * @type { string }
     * @memberof Actorhallows
     */
    @Column({ name: 'bestAttr3' })
    bestAttr3: string;
    /**
     * 圣物极品属性4
     *
     * @type { string }
     * @memberof Actorhallows
     */
    @Column({ name: 'bestAttr4' })
    bestAttr4: string;
    /**
     * 圣物洗炼属性1
     *
     * @type { string }
     * @memberof Actorhallows
     */
    @Column({ name: 'refining1' })
    refining1: string;
    /**
     * 圣物洗炼属性2
     *
     * @type { string }
     * @memberof Actorhallows
     */
    @Column({ name: 'refining2' })
    refining2: string;
    /**
     * 圣物洗炼属性3
     *
     * @type { string }
     * @memberof Actorhallows
     */
    @Column({ name: 'refining3' })
    refining3: string;
    /**
     * 圣物洗炼属性4
     *
     * @type { string }
     * @memberof Actorhallows
     */
    @Column({ name: 'refining4' })
    refining4: string;
}