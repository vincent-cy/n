import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * vaserieslog
 * @Date 2022/7/22 15:16:22
 * @author vincent
 * @export
 * @class Vaserieslog
 */
@Entity({
    name: 'vaserieslog'
})
export class Vaserieslog {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Vaserieslog
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 增值序列号
     *
     * @type { string }
     * @memberof Vaserieslog
     */
    @Column({ name: 'sn' })
    sn: string;
    /**
     * 序列号分类
     *
     * @type { number }
     * @memberof Vaserieslog
     */
    @Column({ name: 'tp' })
    tp: number;
    /**
     * 序列号子类
     *
     * @type { number }
     * @memberof Vaserieslog
     */
    @Column({ name: 'val' })
    val: number;
    /**
     * 序列号生成时间
     *
     * @type { string }
     * @memberof Vaserieslog
     */
    @Column({ name: 'gt' })
    gt: string;
    /**
     * 序列号使用时间
     *
     * @type { string }
     * @memberof Vaserieslog
     */
    @Column({ name: 'ut' })
    ut: string;
    /**
     * 使用序列号的账号ID
     *
     * @type { number }
     * @memberof Vaserieslog
     */
    @Column({ name: 'uid' })
    uid: number;
    /**
     * 使用此序列号的角色ID
     *
     * @type { number }
     * @memberof Vaserieslog
     */
    @Column({ name: 'cid' })
    cid: number;
    /**
     * 使用此序列号的角色名称
     *
     * @type { string }
     * @memberof Vaserieslog
     */
    @Column({ name: 'username' })
    username: string;
}