import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actoralmirahitem
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actoralmirahitem
 */
@Entity({
    name: 'actoralmirahitem'
})
export class Actoralmirahitem {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actoralmirahitem
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色ID
     *
     * @type { number }
     * @memberof Actoralmirahitem
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 衣橱类型
     *
     * @type { number }
     * @memberof Actoralmirahitem
     */
    @Column({ name: 'nId' })
    nId: number;
    /**
     * 等级
     *
     * @type { number }
     * @memberof Actoralmirahitem
     */
    @Column({ name: 'nlv' })
    nlv: number;
    /**
     * 是否穿在身上
     *
     * @type { number }
     * @memberof Actoralmirahitem
     */
    @Column({ name: 'ntakeon' })
    ntakeon: number;
}