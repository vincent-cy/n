import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * offlineachieve
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Offlineachieve
 */
@Entity({
    name: 'offlineachieve'
})
export class Offlineachieve {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Offlineachieve
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Offlineachieve
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 成就主类型
     *
     * @type { number }
     * @memberof Offlineachieve
     */
    @Column({ name: 'type' })
    type: number;
    /**
     * 成就父类型
     *
     * @type { number }
     * @memberof Offlineachieve
     */
    @Column({ name: 'subtype' })
    subtype: number;
    /**
     * 进度
     *
     * @type { number }
     * @memberof Offlineachieve
     */
    @Column({ name: 'value' })
    value: number;
    /**
     * 方式
     *
     * @type { number }
     * @memberof Offlineachieve
     */
    @Column({ name: 'way' })
    way: number;
}