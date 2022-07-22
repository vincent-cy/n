import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorbagitem
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorbagitem
 */
@Entity({
    name: 'actorbagitem'
})
export class Actorbagitem {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色ID
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 物品的Guid是
     *
     * @type { string }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemguid' })
    itemguid: string;
    /**
     * 物品的ID，品质等级，强化等级
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemidquastrong' })
    itemidquastrong: number;
    /**
     * 物品的耐久以及耐久上限
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemduration' })
    itemduration: number;
    /**
     * 物品的数量以及标记
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemcountflag' })
    itemcountflag: number;
    /**
     * 物品的打孔信息
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'iteminlayhole' })
    iteminlayhole: number;
    /**
     * 物品的过期时间
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemtime' })
    itemtime: number;
    /**
     * 保留
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemreservs' })
    itemreservs: number;
    /**
     * 极品属性1
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemsmith1' })
    itemsmith1: number;
    /**
     * 极品属性2
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemsmith2' })
    itemsmith2: number;
    /**
     * 极品属性3
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemsmith3' })
    itemsmith3: number;
    /**
     * 极品属性4
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemsmith4' })
    itemsmith4: number;
    /**
     * 极品属性5
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemsmith5' })
    itemsmith5: number;
    /**
     * 保留字节2
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemreservs2' })
    itemreservs2: number;
    /**
     * 初始化的精锻属性
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'initsmith' })
    initsmith: number;
    /**
     * 极品属性
     *
     * @type { string }
     * @memberof Actorbagitem
     */
    @Column({ name: 'bestAttr' })
    bestAttr: string;
    /**
     * 道具类型
     *
     * @type { number }
     * @memberof Actorbagitem
     */
    @Column({ name: 'itemtype' })
    itemtype: number;
    /**
     * 洗炼属性
     *
     * @type { string }
     * @memberof Actorbagitem
     */
    @Column({ name: 'refining' })
    refining: string;
    /**
     * 归属name
     *
     * @type { string }
     * @memberof Actorbagitem
     */
    @Column({ name: 'sourcename' })
    sourcename: string;
}