import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * vaseries
 * @Date 2022/7/22 15:16:22
 * @author vincent
 * @export
 * @class Vaseries
 */
@Entity({
    name: 'vaseries'
})
export class Vaseries {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Vaseries
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 唯一序列号
     *
     * @type { string }
     * @memberof Vaseries
     */
    @Column({ name: 'sn' })
    sn: string;
    /**
     * 序列号分类
     *
     * @type { number }
     * @memberof Vaseries
     */
    @Column({ name: 'tp' })
    tp: number;
    /**
     * 序列号子类
     *
     * @type { number }
     * @memberof Vaseries
     */
    @Column({ name: 'val' })
    val: number;
    /**
     * 序列号生成时间
     *
     * @type { string }
     * @memberof Vaseries
     */
    @Column({ name: 'gt' })
    gt: string;
}