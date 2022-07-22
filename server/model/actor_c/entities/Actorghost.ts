import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorghost
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorghost
 */
@Entity({
    name: 'actorghost'
})
export class Actorghost {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorghost
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Actorghost
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 等级
     *
     * @type { number }
     * @memberof Actorghost
     */
    @Column({ name: 'lv' })
    lv: number;
    /**
     * 祝福值
     *
     * @type { number }
     * @memberof Actorghost
     */
    @Column({ name: 'bless' })
    bless: number;
}