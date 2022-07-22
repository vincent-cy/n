import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorgameotherSets
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class ActorgameotherSets
 */
@Entity({
    name: 'actorgameotherSets'
})
export class ActorgameotherSets {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof ActorgameotherSets
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * actorid
     *
     * @type { number }
     * @memberof ActorgameotherSets
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 快捷键
     *
     * @type { string }
     * @memberof ActorgameotherSets
     */
    @Column({ name: 'kb' })
    kb: string;
    /**
     * setting
     *
     * @type { string }
     * @memberof ActorgameotherSets
     */
    @Column({ name: 'setting' })
    setting: string;
}