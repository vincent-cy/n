import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorpetitem
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorpetitem
 */
@Entity({
    name: 'actorpetitem'
})
export class Actorpetitem {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色ID
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 物品的Guid是
     *
     * @type { string }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemguid' })
    itemguid: string;
    /**
     * 物品的ID，品质等级，强化等级
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemidquastrong' })
    itemidquastrong: number;
    /**
     * 物品的耐久以及耐久上限
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemduration' })
    itemduration: number;
    /**
     * 物品的数量以及标记
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemcountflag' })
    itemcountflag: number;
    /**
     * 物品的打孔信息
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'iteminlayhole' })
    iteminlayhole: number;
    /**
     * 物品的过期时间
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemtime' })
    itemtime: number;
    /**
     * 保留
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemreservs' })
    itemreservs: number;
    /**
     * 极品属性1
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemsmith1' })
    itemsmith1: number;
    /**
     * 极品属性2
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemsmith2' })
    itemsmith2: number;
    /**
     * 极品属性3
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemsmith3' })
    itemsmith3: number;
    /**
     * 极品属性4
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemsmith4' })
    itemsmith4: number;
    /**
     * 极品属性5
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemsmith5' })
    itemsmith5: number;
    /**
     * 保留字节2
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'itemreservs2' })
    itemreservs2: number;
    /**
     * 初始化的精锻属性
     *
     * @type { number }
     * @memberof Actorpetitem
     */
    @Column({ name: 'initsmith' })
    initsmith: number;
    /**
     * 极品属性
     *
     * @type { string }
     * @memberof Actorpetitem
     */
    @Column({ name: 'bestAttr' })
    bestAttr: string;
    /**
     * 洗炼属性
     *
     * @type { string }
     * @memberof Actorpetitem
     */
    @Column({ name: 'refining' })
    refining: string;
    /**
     * 归属name
     *
     * @type { string }
     * @memberof Actorpetitem
     */
    @Column({ name: 'sourcename' })
    sourcename: string;
}