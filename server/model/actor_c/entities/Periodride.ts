import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * periodride
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Periodride
 */
@Entity({
    name: 'periodride'
})
export class Periodride {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Periodride
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Periodride
     */
    @Column({ name: 'nactorid' })
    nactorid: number;
    /**
     * 坐骑id
     *
     * @type { number }
     * @memberof Periodride
     */
    @Column({ name: 'nrideid' })
    nrideid: number;
    /**
     * 到期时间
     *
     * @type { number }
     * @memberof Periodride
     */
    @Column({ name: 'ntime' })
    ntime: number;
    /**
     * 预留
     *
     * @type { number }
     * @memberof Periodride
     */
    @Column({ name: 'reserver' })
    reserver: number;
}