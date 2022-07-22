import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * bossmgr
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Bossmgr
 */
@Entity({
    name: 'bossmgr'
})
export class Bossmgr {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Bossmgr
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * bossid
     *
     * @type { number }
     * @memberof Bossmgr
     */
    @Column({ name: 'bossid' })
    bossid: number;
    /**
     * 刷新时间
     *
     * @type { number }
     * @memberof Bossmgr
     */
    @Column({ name: 'referTime' })
    referTime: number;
    /**
     * 剩余个数
     *
     * @type { number }
     * @memberof Bossmgr
     */
    @Column({ name: 'leftCount' })
    leftCount: number;
    /**
     * boss等级
     *
     * @type { number }
     * @memberof Bossmgr
     */
    @Column({ name: 'bosslv' })
    bosslv: number;
}