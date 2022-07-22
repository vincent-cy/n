import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * guildstorerecord
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Guildstorerecord
 */
@Entity({
    name: 'guildstorerecord'
})
export class Guildstorerecord {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Guildstorerecord
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * guildid
     *
     * @type { number }
     * @memberof Guildstorerecord
     */
    @Column({ name: 'guildid' })
    guildid: number;
    /**
     * 类型 1 存入 2 取出
     *
     * @type { number }
     * @memberof Guildstorerecord
     */
    @Column({ name: 'ntype' })
    ntype: number;
    /**
     * 时间
     *
     * @type { number }
     * @memberof Guildstorerecord
     */
    @Column({ name: 'ntime' })
    ntime: number;
    /**
     * 玩家姓名
     *
     * @type { string }
     * @memberof Guildstorerecord
     */
    @Column({ name: 'actorname' })
    actorname: string;
    /**
     * 物品名称
     *
     * @type { string }
     * @memberof Guildstorerecord
     */
    @Column({ name: 'itemname' })
    itemname: string;
    /**
     * 物品数量
     *
     * @type { number }
     * @memberof Guildstorerecord
     */
    @Column({ name: 'itemnum' })
    itemnum: number;
    /**
     * 钱的类型
     *
     * @type { number }
     * @memberof Guildstorerecord
     */
    @Column({ name: 'cointype' })
    cointype: number;
    /**
     * 钱的数量
     *
     * @type { number }
     * @memberof Guildstorerecord
     */
    @Column({ name: 'coinnum' })
    coinnum: number;
    /**
     * 预留
     *
     * @type { number }
     * @memberof Guildstorerecord
     */
    @Column({ name: 'reserver' })
    reserver: number;
}