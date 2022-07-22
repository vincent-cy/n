import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * gamesetdata
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Gamesetdata
 */
@Entity({
    name: 'gamesetdata'
})
export class Gamesetdata {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 游戏设置值
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata1' })
    gamedata1: number;
    /**
     * gamedata2
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata2' })
    gamedata2: number;
    /**
     * gamedata3
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata3' })
    gamedata3: number;
    /**
     * gamedata4
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata4' })
    gamedata4: number;
    /**
     * gamedata5
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata5' })
    gamedata5: number;
    /**
     * gamedata6
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata6' })
    gamedata6: number;
    /**
     * gamedata7
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata7' })
    gamedata7: number;
    /**
     * gamedata8
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata8' })
    gamedata8: number;
    /**
     * gamedata9
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata9' })
    gamedata9: number;
    /**
     * gamedata10
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata10' })
    gamedata10: number;
    /**
     * gamedata11
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata11' })
    gamedata11: number;
    /**
     * gamedata12
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata12' })
    gamedata12: number;
    /**
     * gamedata13
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata13' })
    gamedata13: number;
    /**
     * gamedata14
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata14' })
    gamedata14: number;
    /**
     * gamedata15
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata15' })
    gamedata15: number;
    /**
     * gamedata16
     *
     * @type { number }
     * @memberof Gamesetdata
     */
    @Column({ name: 'gamedata16' })
    gamedata16: number;
}