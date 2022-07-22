import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * goingquest
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Goingquest
 */
@Entity({
    name: 'goingquest'
})
export class Goingquest {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Goingquest
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色id
     *
     * @type { number }
     * @memberof Goingquest
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 任务id以及需求id
     *
     * @type { number }
     * @memberof Goingquest
     */
    @Column({ name: 'idtask' })
    idtask: number;
    /**
     * 对应的type
     *
     * @type { number }
     * @memberof Goingquest
     */
    @Column({ name: 'type' })
    type: number;
    /**
     * 任务进度值
     *
     * @type { number }
     * @memberof Goingquest
     */
    @Column({ name: 'value' })
    value: number;
    /**
     * 任务状态
     *
     * @type { number }
     * @memberof Goingquest
     */
    @Column({ name: 'state' })
    state: number;
    /**
     * 完成状态
     *
     * @type { number }
     * @memberof Goingquest
     */
    @Column({ name: 'complete' })
    complete: number;
    /**
     * 当前任务使用飞鞋次数
     *
     * @type { number }
     * @memberof Goingquest
     */
    @Column({ name: 'usefstimes' })
    usefstimes: number;
    /**
     * 用于环形任务id
     *
     * @type { number }
     * @memberof Goingquest
     */
    @Column({ name: 'nStartId' })
    nStartId: number;
}