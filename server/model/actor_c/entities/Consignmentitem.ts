import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * consignmentitem
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Consignmentitem
 */
@Entity({
    name: 'consignmentitem'
})
export class Consignmentitem {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色ID
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 物品的Guid
     *
     * @type { string }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemguid' })
    itemguid: string;
    /**
     * 物品的ID
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemidquastrong' })
    itemidquastrong: number;
    /**
     * 物品的星级
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemduration' })
    itemduration: number;
    /**
     * 物品的数量
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemcountflag' })
    itemcountflag: number;
    /**
     * 物品的打孔信息
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'iteminlayhole' })
    iteminlayhole: number;
    /**
     * 物品的过期时间
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemtime' })
    itemtime: number;
    /**
     * 保留
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemreservs' })
    itemreservs: number;
    /**
     * 极品属性1
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemsmith1' })
    itemsmith1: number;
    /**
     * 极品属性2
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemsmith2' })
    itemsmith2: number;
    /**
     * 极品属性3
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemsmith3' })
    itemsmith3: number;
    /**
     * 极品属性4
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemsmith4' })
    itemsmith4: number;
    /**
     * 极品属性5
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemsmith5' })
    itemsmith5: number;
    /**
     * 保留字节2
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'itemreservs2' })
    itemreservs2: number;
    /**
     * 初始化的精锻属性
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'initsmith' })
    initsmith: number;
    /**
     * 寄卖的时间
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'selltime' })
    selltime: number;
    /**
     * 物品单价
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'price' })
    price: number;
    /**
     * 状态
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'state' })
    state: number;
    /**
     * 服务器id
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
    /**
     * 极品属性
     *
     * @type { string }
     * @memberof Consignmentitem
     */
    @Column({ name: 'bestAttr' })
    bestAttr: string;
    /**
     * 归属name
     *
     * @type { string }
     * @memberof Consignmentitem
     */
    @Column({ name: 'sourcename' })
    sourcename: string;
    /**
     * 是否是系统
     *
     * @type { number }
     * @memberof Consignmentitem
     */
    @Column({ name: 'autoid' })
    autoid: number;
}