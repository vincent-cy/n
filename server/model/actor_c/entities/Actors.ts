import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actors
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actors
 */
@Entity({
    name: 'actors'
})
export class Actors {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actors
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色ID
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 账户ID
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'accountid' })
    accountid: number;
    /**
     * 玩家名字
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'actorname' })
    actorname: string;
    /**
     * 头像ID
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'icon' })
    icon: number;
    /**
     * 性别
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'sex' })
    sex: number;
    /**
     * 等级
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'level' })
    level: number;
    /**
     * 职业
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'job' })
    job: number;
    /**
     * 位置x
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'posx' })
    posx: number;
    /**
     * 位置y
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'posy' })
    posy: number;
    /**
     * 玩家的经验
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'exp' })
    exp: string;
    /**
     * 副本的handle
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'fbhandle' })
    fbhandle: number;
    /**
     * 场景id
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'sceneid' })
    sceneid: number;
    /**
     * 玩家的PK值
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'pkvalue' })
    pkvalue: number;
    /**
     * 背包的格子数量:道具,装备,材料
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'baggridcount' })
    baggridcount: number;
    /**
     * 仓库每页格子数量
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'deportgridcount' })
    deportgridcount: number;
    /**
     * 战魂值
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'zhanhunvalue' })
    zhanhunvalue: number;
    /**
     * 绑定金钱
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'bindcoin' })
    bindcoin: number;
    /**
     * 绑定元宝
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'bindyuanbao' })
    bindyuanbao: number;
    /**
     * 非绑定元宝
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'nonbindyuanbao' })
    nonbindyuanbao: number;
    /**
     * 非绑定金钱
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'nonbindcoin' })
    nonbindcoin: number;
    /**
     * 玩家的死亡次数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'bekillcount' })
    bekillcount: number;
    /**
     * 0位:已删除,1位:已禁用,2位:有效,3位:首选
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'status' })
    status: number;
    /**
     * 玩家的血
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'hp' })
    hp: number;
    /**
     * 玩家的内力
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'mp' })
    mp: number;
    /**
     * 玩家的活力，挂机用的
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'energy' })
    energy: number;
    /**
     * 潜龙令，一种代币，战场获得
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'qianlongling' })
    qianlongling: number;
    /**
     * 玩家的帮派ID
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'guildid' })
    guildid: number;
    /**
     * 行会名称
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'guildname' })
    guildname: string;
    /**
     * 队伍的ID
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'teamid' })
    teamid: number;
    /**
     * 玩家的社会关系，按位存储的
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'socialmask' })
    socialmask: number;
    /**
     * 玩家的工会贡献度
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'guildexp' })
    guildexp: number;
    /**
     * 角色的创建时间
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'createtime' })
    createtime: string;
    /**
     * 上次登录的ip
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'lastloginip' })
    lastloginip: string;
    /**
     * 服务器的存盘时间，在这个点最后一次更新db
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'updatetime' })
    updatetime: string;
    /**
     * 第2个仓库背包的过期时间
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'deport2expiredtime' })
    deport2expiredtime: number;
    /**
     * 第3个仓库背包的过期时间
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'deport3expiredtime' })
    deport3expiredtime: number;
    /**
     * 第4个仓库背包的过期时间
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'deport4expiredtime' })
    deport4expiredtime: number;
    /**
     * 账户的名字
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'accountname' })
    accountname: string;
    /**
     * 进入副本前的场景的ID
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'enterfbsceneid' })
    enterfbsceneid: number;
    /**
     * 进入副本前的位置(X,y合并起来)
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'enterfbpos' })
    enterfbpos: number;
    /**
     * 玩家的朝向相关
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'dirrelated' })
    dirrelated: number;
    /**
     * 未使用的多倍经验
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'mountexp' })
    mountexp: string;
    /**
     * 上次登录时间
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'lastlogintime' })
    lastlogintime: number;
    /**
     * 上次从逻辑服务器的退出时间,minitime格式的
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'lastlogouttime' })
    lastlogouttime: number;
    /**
     * 玩家所在的服务器的编号
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
    /**
     * 跳跃体力和最大跳跃体力
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'jumppower' })
    jumppower: number;
    /**
     * 本周的擂台胜利次数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'ltvicweek' })
    ltvicweek: number;
    /**
     * 本周擂台最大连胜数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'ltmaxvicweek' })
    ltmaxvicweek: number;
    /**
     * 擂台战连胜数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'itdurvictimes' })
    itdurvictimes: number;
    /**
     * 普通场景的复活点，是场景id,x,y的组合
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'csrevivepoint' })
    csrevivepoint: string;
    /**
     * 副本复活点,场景id,x,y的复合体
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'fbrevivepoint' })
    fbrevivepoint: string;
    /**
     * 城镇的复活点，是场景id，x,y的复合体
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'cityrevivepoint' })
    cityrevivepoint: string;
    /**
     * 玩家的成就点
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'achievepoint' })
    achievepoint: number;
    /**
     * 阵营的贡献度
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'zycont' })
    zycont: number;
    /**
     * 玩家当前的称号的ID
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'curtitleid' })
    curtitleid: number;
    /**
     * vip的等级
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'viplevel' })
    viplevel: number;
    /**
     * 本级vip已经持续的时间
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'vipdurtime' })
    vipdurtime: number;
    /**
     * 成为本机vip的时间
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'vipcreatetime' })
    vipcreatetime: number;
    /**
     * 玩家当天获得的经验的数值
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'exptoday' })
    exptoday: number;
    /**
     * 当日累计获取的战魂值
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'zhanhunvaluetoday' })
    zhanhunvaluetoday: number;
    /**
     * 玩家的阵营
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'zy' })
    zy: number;
    /**
     * 衣橱等级，低位时装，高位翅膀
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'almirahlv' })
    almirahlv: number;
    /**
     * 时装战力
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'fashionbattle' })
    fashionbattle: number;
    /**
     * 元宝的种植3
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'ybplant3' })
    ybplant3: number;
    /**
     * 装备的总分
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'equipscore' })
    equipscore: number;
    /**
     * 消费的元宝
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'consumeyb' })
    consumeyb: number;
    /**
     * n_51
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'n_51' })
    n_51: number;
    /**
     * 今天获得的阵营贡献
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'zycontrtoday' })
    zycontrtoday: number;
    /**
     * 玩家提取的元宝的数目
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'drawybcount' })
    drawybcount: number;
    /**
     * 活跃度
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'activity' })
    activity: number;
    /**
     * 战力
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'battlepower' })
    battlepower: number;
    /**
     * 最后一次上线所在的服务器Id
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'lastloginserverid' })
    lastloginserverid: number;
    /**
     * 摊位的格子数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'stallgridcount' })
    stallgridcount: number;
    /**
     * 荣誉值
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'honourval' })
    honourval: number;
    /**
     * 低16位荣誉等级
            高16buff等级
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'honourlv' })
    honourlv: number;
    /**
     * 过期时间 dealine
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'honourbuffdl' })
    honourbuffdl: number;
    /**
     * 玩家的转生次数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'circle' })
    circle: number;
    /**
     * 玩家的转生灵魄
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'circlesoul' })
    circlesoul: number;
    /**
     * 心情
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'nmood' })
    nmood: string;
    /**
     * 怒气
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'nanger' })
    nanger: number;
    /**
     * 身上装备鉴定数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'nidentifytimes' })
    nidentifytimes: number;
    /**
     * 签到次数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'checkins' })
    checkins: number;
    /**
     * 功勋值
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'exploit' })
    exploit: number;
    /**
     * 坐骑等级
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'n_68' })
    n_68: number;
    /**
     * nResInt_135
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'nResInt_135' })
    nResInt_135: number;
    /**
     * n_70
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'n_70' })
    n_70: number;
    /**
     * nResInt_42
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'nResInt_42' })
    nResInt_42: number;
    /**
     * 时效坐骑过期时间
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'rideexpiredtime' })
    rideexpiredtime: number;
    /**
     * 商城积分
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'storepoint' })
    storepoint: number;
    /**
     * 活动与副本当日未完成次数
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'workday' })
    workday: string;
    /**
     * 活动与副本第1日未完成次数
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'work1day' })
    work1day: string;
    /**
     * 活动与副本第2日未完成次数
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'work2day' })
    work2day: string;
    /**
     * 活动与副本第3日未完成次数
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'work3day' })
    work3day: string;
    /**
     * 翅膀档次
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'swinglevel' })
    swinglevel: number;
    /**
     * n_93
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'n_93' })
    n_93: number;
    /**
     * 翅膀的id
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'nswingid' })
    nswingid: number;
    /**
     * 登陆的天数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'logindays' })
    logindays: number;
    /**
     * 运营商渠道
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'token' })
    token: string;
    /**
     * 广告id
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'adid' })
    adid: number;
    /**
     * 仓库锁密码
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'depotlockpwd' })
    depotlockpwd: string;
    /**
     * 每日签到标识
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'signin' })
    signin: number;
    /**
     * 工资点数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'salary' })
    salary: number;
    /**
     * 仓库元宝
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'depotyb' })
    depotyb: number;
    /**
     * 仓库金币
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'depotcoin' })
    depotcoin: number;
    /**
     * 灵力
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'magicpower' })
    magicpower: number;
    /**
     * 法宝战力
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'magicbattle' })
    magicbattle: number;
    /**
     * zhanxunpoint
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'zhanxunpoint' })
    zhanxunpoint: number;
    /**
     * vipgrade
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'vipgrade' })
    vipgrade: number;
    /**
     * vippoint
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'vippoint' })
    vippoint: number;
    /**
     * 背包在线时间累积
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'bagtime' })
    bagtime: number;
    /**
     * 玩家杀怪总数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'killmonstercount' })
    killmonstercount: number;
    /**
     * 战绩
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'militaryscore' })
    militaryscore: number;
    /**
     * 玩家在线时长秒
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'totalonlinesecond' })
    totalonlinesecond: number;
    /**
     * 战章经验
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'medalexp' })
    medalexp: number;
    /**
     * 上次登录对应所在服的开服天数
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'todayexploit' })
    todayexploit: number;
    /**
     * 翅膀等级
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'winglevel' })
    winglevel: number;
    /**
     * 在线标识
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'onlinestatus' })
    onlinestatus: number;
    /**
     * 紫钻等级
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'pdlevel' })
    pdlevel: number;
    /**
     * 紫钻类型
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'pdtype' })
    pdtype: number;
    /**
     * 玩家最大攻击力，只保存给排行榜查询
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'maxattack' })
    maxattack: number;
    /**
     * 战绩
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'killscore' })
    killscore: number;
    /**
     * 今日战绩
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'todaykillscore' })
    todaykillscore: number;
    /**
     * 喇叭数量和飞鞋数量
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'boratFlyShoes' })
    boratFlyShoes: number;
    /**
     * 回收积分数值
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'recyclepoints' })
    recyclepoints: number;
    /**
     * 经脉
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'jmhjy' })
    jmhjy: string;
    /**
     * ‌禁言时间
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'shutUptime' })
    shutUptime: number;
    /**
     * 原区服serverid
     *
     * @type { number }
     * @memberof Actors
     */
    @Column({ name: 'oldserverindex' })
    oldserverindex: number;
    /**
     * 交易额度
     *
     * @type { string }
     * @memberof Actors
     */
    @Column({ name: 'tradingquota' })
    tradingquota: string;
}