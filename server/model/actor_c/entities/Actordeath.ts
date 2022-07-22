import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actordeath
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actordeath
 */
@Entity({
    name: 'actordeath'
})
export class Actordeath {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actordeath
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家ID
     *
     * @type { number }
     * @memberof Actordeath
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 击杀者ID
     *
     * @type { number }
     * @memberof Actordeath
     */
    @Column({ name: 'killerid' })
    killerid: number;
    /**
     * 死亡时间
     *
     * @type { number }
     * @memberof Actordeath
     */
    @Column({ name: 'deathtime' })
    deathtime: number;
    /**
     * 击杀者Name
     *
     * @type { string }
     * @memberof Actordeath
     */
    @Column({ name: 'killername' })
    killername: string;
    /**
     * 击杀场景
     *
     * @type { number }
     * @memberof Actordeath
     */
    @Column({ name: 'killsceneid' })
    killsceneid: number;
    /**
     * 击杀位置x
     *
     * @type { number }
     * @memberof Actordeath
     */
    @Column({ name: 'killposx' })
    killposx: number;
    /**
     * 击杀位置y
     *
     * @type { number }
     * @memberof Actordeath
     */
    @Column({ name: 'killposy' })
    killposy: number;
    /**
     * 类型
     *
     * @type { number }
     * @memberof Actordeath
     */
    @Column({ name: 'type' })
    type: number;
}