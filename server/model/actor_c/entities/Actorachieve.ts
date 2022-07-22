import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorachieve
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorachieve
 */
@Entity({
    name: 'actorachieve'
})
export class Actorachieve {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorachieve
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Actorachieve
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 成就id  成就类型*1000+子成就类型
     *
     * @type { number }
     * @memberof Actorachieve
     */
    @Column({ name: 'achievetype' })
    achievetype: number;
    /**
     * nValue
     *
     * @type { string }
     * @memberof Actorachieve
     */
    @Column({ name: 'nValue' })
    nValue: string;
}