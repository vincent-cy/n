import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * mailattach
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Mailattach
 */
@Entity({
    name: 'mailattach'
})
export class Mailattach {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Mailattach
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 邮件id
     *
     * @type { string }
     * @memberof Mailattach
     */
    @Column({ name: 'mailid' })
    mailid: string;
    /**
     * 角色ID
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 类型
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'type' })
    type: number;
    /**
     * 物品的Guid
     *
     * @type { string }
     * @memberof Mailattach
     */
    @Column({ name: 'itemguid' })
    itemguid: string;
    /**
     * 物品的ID，品质等级，强化等级
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'itemidquastrong' })
    itemidquastrong: number;
    /**
     * 物品的耐久以及耐久上限
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'itemduration' })
    itemduration: number;
    /**
     * 物品的数量以及标记
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'itemcountflag' })
    itemcountflag: number;
    /**
     * 物品的打孔信息
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'iteminlayhole' })
    iteminlayhole: number;
    /**
     * 物品的过期时间
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'itemtime' })
    itemtime: number;
    /**
     * 保留
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'itemreservs' })
    itemreservs: number;
    /**
     * 极品属性1
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'itemsmith1' })
    itemsmith1: number;
    /**
     * 极品属性2
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'itemsmith2' })
    itemsmith2: number;
    /**
     * 极品属性3
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'itemsmith3' })
    itemsmith3: number;
    /**
     * 极品属性4
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'itemsmith4' })
    itemsmith4: number;
    /**
     * 极品属性5
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'itemsmith5' })
    itemsmith5: number;
    /**
     * 保留字节2
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'itemreservs2' })
    itemreservs2: number;
    /**
     * 初始化的精锻属性
     *
     * @type { number }
     * @memberof Mailattach
     */
    @Column({ name: 'initsmith' })
    initsmith: number;
}