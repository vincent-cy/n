import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * guildstore
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Guildstore
 */
@Entity({
    name: 'guildstore'
})
export class Guildstore {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Guildstore
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 帮会ID
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'guildid' })
    guildid: number;
    /**
     * 角色id
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 物品的Guid
     *
     * @type { string }
     * @memberof Guildstore
     */
    @Column({ name: 'itemguid' })
    itemguid: string;
    /**
     * 物品的ID，品质等级，强化等级
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'itemidquastrong' })
    itemidquastrong: number;
    /**
     * 物品的耐久以及耐久上限
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'itemduration' })
    itemduration: number;
    /**
     * 物品的数量以及标记
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'itemcountflag' })
    itemcountflag: number;
    /**
     * 物品的打孔信息
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'iteminlayhole' })
    iteminlayhole: number;
    /**
     * 物品的过期时间
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'itemtime' })
    itemtime: number;
    /**
     * 极品属性1
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'itemsmith1' })
    itemsmith1: number;
    /**
     * 极品属性2
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'itemsmith2' })
    itemsmith2: number;
    /**
     * 极品属性3
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'itemsmith3' })
    itemsmith3: number;
    /**
     * 极品属性4
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'itemsmith4' })
    itemsmith4: number;
    /**
     * 极品属性5
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'itemsmith5' })
    itemsmith5: number;
    /**
     * 初始化的精锻属性
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'initsmith' })
    initsmith: number;
    /**
     * 取出需要的钱的类型 1 为金币 2 为元宝
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'ntype' })
    ntype: number;
    /**
     * 钱的数量
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'nmoney' })
    nmoney: number;
    /**
     * 预留1
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'itemreservs' })
    itemreservs: number;
    /**
     * itemreservs2
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'itemreservs2' })
    itemreservs2: number;
    /**
     * 申请兑换的玩家id
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'exchangeactorid' })
    exchangeactorid: number;
    /**
     * 申请兑换的玩家NAME
     *
     * @type { string }
     * @memberof Guildstore
     */
    @Column({ name: 'exchangeactorname' })
    exchangeactorname: string;
    /**
     * 申请兑换的时间
     *
     * @type { number }
     * @memberof Guildstore
     */
    @Column({ name: 'exchangetime' })
    exchangetime: number;
}