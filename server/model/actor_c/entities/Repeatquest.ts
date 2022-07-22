import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * repeatquest
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Repeatquest
 */
@Entity({
    name: 'repeatquest'
})
export class Repeatquest {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Repeatquest
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色id
     *
     * @type { number }
     * @memberof Repeatquest
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 低16任务id，高16完成次数
     *
     * @type { number }
     * @memberof Repeatquest
     */
    @Column({ name: 'idtime' })
    idtime: number;
    /**
     * 任务计次归零的时间
     *
     * @type { number }
     * @memberof Repeatquest
     */
    @Column({ name: 'qtime' })
    qtime: number;
}