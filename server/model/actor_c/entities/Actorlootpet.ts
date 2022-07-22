import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorlootpet
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorlootpet
 */
@Entity({
    name: 'actorlootpet'
})
export class Actorlootpet {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorlootpet
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Actorlootpet
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 类型
     *
     * @type { number }
     * @memberof Actorlootpet
     */
    @Column({ name: 'type' })
    type: number;
    /**
     * 时间
     *
     * @type { number }
     * @memberof Actorlootpet
     */
    @Column({ name: 'continueTime' })
    continueTime: number;
}