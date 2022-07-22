import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * guildlist
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Guildlist
 */
@Entity({
    name: 'guildlist'
})
export class Guildlist {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Guildlist
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 帮派的id
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'guildid' })
    guildid: number;
    /**
     * 行会会长id
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'actorId' })
    actorId: number;
    /**
     * 帮派的名字
     *
     * @type { string }
     * @memberof Guildlist
     */
    @Column({ name: 'guildname' })
    guildname: string;
    /**
     * 创建者的名字
     *
     * @type { string }
     * @memberof Guildlist
     */
    @Column({ name: 'foundname' })
    foundname: string;
    /**
     * 帮主名字
     *
     * @type { string }
     * @memberof Guildlist
     */
    @Column({ name: 'leadername' })
    leadername: string;
    /**
     * 帮派的等级
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'level' })
    level: number;
    /**
     * 内部公告
     *
     * @type { string }
     * @memberof Guildlist
     */
    @Column({ name: 'inmemo' })
    inmemo: string;
    /**
     * 外部公告
     *
     * @type { string }
     * @memberof Guildlist
     */
    @Column({ name: 'outmemo' })
    outmemo: string;
    /**
     * 帮派的状态
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'status' })
    status: number;
    /**
     * 帮派创建时间
     *
     * @type { string }
     * @memberof Guildlist
     */
    @Column({ name: 'createtime' })
    createtime: string;
    /**
     * 帮派所在的服务器编号
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
    /**
     * 帮派资金
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'guildcoin' })
    guildcoin: number;
    /**
     * qq群id
     *
     * @type { string }
     * @memberof Guildlist
     */
    @Column({ name: 'qqgroupid' })
    qqgroupid: string;
    /**
     * 语音频道类型
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'yytpye' })
    yytpye: number;
    /**
     * yygrilcompere
     *
     * @type { string }
     * @memberof Guildlist
     */
    @Column({ name: 'yygrilcompere' })
    yygrilcompere: string;
    /**
     * 语音频道id
     *
     * @type { string }
     * @memberof Guildlist
     */
    @Column({ name: 'yygroupid' })
    yygroupid: string;
    /**
     * 语音频道宣言
     *
     * @type { string }
     * @memberof Guildlist
     */
    @Column({ name: 'yymemo' })
    yymemo: string;
    /**
     * 竞价数量
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'nbidcoin' })
    nbidcoin: number;
    /**
     * 0  添加成员需要审核 1 直接加入
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'nmask' })
    nmask: number;
    /**
     * 群公告
     *
     * @type { string }
     * @memberof Guildlist
     */
    @Column({ name: 'groupmemo' })
    groupmemo: string;
    /**
     * 报名标志
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'signupflag' })
    signupflag: number;
    /**
     * 召集时间
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'reserver' })
    reserver: number;
    /**
     * 主殿等级
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'halllevel' })
    halllevel: number;
    /**
     * 练功房等级
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'exerciseroomlv' })
    exerciseroomlv: number;
    /**
     * 议事厅等级
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'assemblyhalllv' })
    assemblyhalllv: number;
    /**
     * 行会商店等级
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'storelevl' })
    storelevl: number;
    /**
     * 月光宝盒等级
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'moonboxlev' })
    moonboxlev: number;
    /**
     * 行会封印兽碑的等级
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'nbosslev' })
    nbosslev: number;
    /**
     * 行会封印兽碑挑战次数
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'nchanllengetimes' })
    nchanllengetimes: number;
    /**
     * 行会建筑下次升级的时间
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'nupnexttime' })
    nupnexttime: number;
    /**
     * 自动加入行会的等级要求
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'autojoinlevel' })
    autojoinlevel: number;
    /**
     * 行会升级道具1数量
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'upgradeitemnum1' })
    upgradeitemnum1: number;
    /**
     * 行会升级道具2数量
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'upgradeitemnum2' })
    upgradeitemnum2: number;
    /**
     * 行会升级道具3数量
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'upgradeitemnum3' })
    upgradeitemnum3: number;
    /**
     * 行会神树等级
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'treelevel' })
    treelevel: number;
    /**
     * 行会神树进度
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'treedegree' })
    treedegree: number;
    /**
     * 行会神树果实等级
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'fruitlevel' })
    fruitlevel: number;
    /**
     * 行会神树果实进度
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'fruitdegree' })
    fruitdegree: number;
    /**
     * 行会神树果实数量
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'fruitnum' })
    fruitnum: number;
    /**
     * 行会神树进入结果期的时间
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'fruittime' })
    fruittime: number;
    /**
     * 行会任务ID
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'taskid' })
    taskid: number;
    /**
     * 行会任务进度
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'tasksche' })
    tasksche: number;
    /**
     * 行会每日捐献的资金
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'dailycoindonated' })
    dailycoindonated: number;
    /**
     * 官方认证
     *
     * @type { number }
     * @memberof Guildlist
     */
    @Column({ name: 'certification' })
    certification: number;
}