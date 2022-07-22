import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * useritem
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Useritem
 */
@Entity({
    name: 'useritem'
})
export class Useritem {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Useritem
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 帐户id，如果是角色绑定，这个填0
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'accountid' })
    accountid: number;
    /**
     * 角色id，如果是账户id绑定的物品，这个写0
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 物品的id,大于100000表示金钱
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'itemid' })
    itemid: number;
    /**
     * 绑定属性
     *
     * @type { string }
     * @memberof Useritem
     */
    @Column({ name: 'bind' })
    bind: string;
    /**
     * 强化值
     *
     * @type { string }
     * @memberof Useritem
     */
    @Column({ name: 'strong' })
    strong: string;
    /**
     * 品质
     *
     * @type { string }
     * @memberof Useritem
     */
    @Column({ name: 'quality' })
    quality: string;
    /**
     * 送的物品(金钱的）数量
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'itemcount' })
    itemcount: number;
    /**
     * 服务器id
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
    /**
     * 简单的注释，比如活动的名称
     *
     * @type { string }
     * @memberof Useritem
     */
    @Column({ name: 'memo' })
    memo: string;
    /**
     * 保留字段1
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'reser1' })
    reser1: number;
    /**
     * 保留字段2
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'reser2' })
    reser2: number;
    /**
     * 极品属性1
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'smith1' })
    smith1: number;
    /**
     * 极品属性2
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'smith2' })
    smith2: number;
    /**
     * 极品属性3
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'smith3' })
    smith3: number;
    /**
     * 极品属性4
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'smith4' })
    smith4: number;
    /**
     * 极品属性5
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'smith5' })
    smith5: number;
    /**
     * initsmith
     *
     * @type { number }
     * @memberof Useritem
     */
    @Column({ name: 'initsmith' })
    initsmith: number;
}