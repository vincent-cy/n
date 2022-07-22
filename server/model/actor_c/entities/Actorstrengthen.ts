import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorstrengthen
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorstrengthen
 */
@Entity({
    name: 'actorstrengthen'
})
export class Actorstrengthen {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorstrengthen
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Actorstrengthen
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 类型
     *
     * @type { number }
     * @memberof Actorstrengthen
     */
    @Column({ name: 'ntype' })
    ntype: number;
    /**
     * 位置
     *
     * @type { number }
     * @memberof Actorstrengthen
     */
    @Column({ name: 'npos' })
    npos: number;
    /**
     * 等级
     *
     * @type { number }
     * @memberof Actorstrengthen
     */
    @Column({ name: 'nlv' })
    nlv: number;
}