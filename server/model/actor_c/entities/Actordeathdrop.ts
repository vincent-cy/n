import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actordeathdrop
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actordeathdrop
 */
@Entity({
    name: 'actordeathdrop'
})
export class Actordeathdrop {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actordeathdrop
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家ID
     *
     * @type { number }
     * @memberof Actordeathdrop
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 凶手ID（0-怪,&gt;0玩家）
     *
     * @type { number }
     * @memberof Actordeathdrop
     */
    @Column({ name: 'killerid' })
    killerid: number;
    /**
     * 死亡时间
     *
     * @type { number }
     * @memberof Actordeathdrop
     */
    @Column({ name: 'deathtime' })
    deathtime: number;
    /**
     * 掉落道具ID
     *
     * @type { number }
     * @memberof Actordeathdrop
     */
    @Column({ name: 'dropid' })
    dropid: number;
    /**
     * 掉落道具数量
     *
     * @type { number }
     * @memberof Actordeathdrop
     */
    @Column({ name: 'dropcount' })
    dropcount: number;
}