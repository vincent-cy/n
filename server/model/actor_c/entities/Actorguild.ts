import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorguild
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorguild
 */
@Entity({
    name: 'actorguild'
})
export class Actorguild {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorguild
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色id
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 帮派的id
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'guildid' })
    guildid: number;
    /**
     * 帮派地位和堂口id，高16位是帮派地位值，低16位表示所属堂口
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'typetk' })
    typetk: number;
    /**
     * 下次可领取 召集令的 时间
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'zjnext' })
    zjnext: number;
    /**
     * 下次可升职（降职）的 时间
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'zznext' })
    zznext: number;
    /**
     * 封号序号
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'zscore' })
    zscore: number;
    /**
     * 帮派累计贡献
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'zguildgx' })
    zguildgx: number;
    /**
     * 沙巴克城的职位
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'zpostype' })
    zpostype: number;
    /**
     * nmodel
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'nmodel' })
    nmodel: number;
    /**
     * 今天所得贡献
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'ztodaygx' })
    ztodaygx: number;
    /**
     * shangxtimes
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'shangxtimes' })
    shangxtimes: number;
    /**
     * naddtimes
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'naddtimes' })
    naddtimes: number;
    /**
     * nexploretimes
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'nexploretimes' })
    nexploretimes: number;
    /**
     * nexploreitemid
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'nexploreitemid' })
    nexploreitemid: number;
    /**
     * nchanllengetimes
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'nchanllengetimes' })
    nchanllengetimes: number;
    /**
     * naddchanllengetimes
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'naddchanllengetimes' })
    naddchanllengetimes: number;
    /**
     * 加入行会的时间
     *
     * @type { number }
     * @memberof Actorguild
     */
    @Column({ name: 'jointime' })
    jointime: number;
}