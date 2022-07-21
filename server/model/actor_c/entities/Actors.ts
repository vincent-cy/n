import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("actor_name", ["actorname"], { unique: true })
@Index("AK_Key_2", ["accountid"], {})
@Index("account_name", ["accountname"], {})
@Index("Index_3", ["accountid"], {})
@Index("guild_id", ["guildid"], {})
@Index("index_nonyb", ["nonbindyuanbao"], {})
@Index("index_dyb", ["depotyb"], {})
@Index("index_noncoin", ["nonbindcoin"], {})
@Index("index_dycoin", ["depotcoin"], {})
@Index("index_updatetime", ["updatetime"], {})
@Index("actorid_index", ["actorid"], {})
@Entity("actors", { schema: "actor_c1001" })
export class Actors {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "actorid",
    comment: "角色ID",
    unsigned: true,
  })
  actorid: number;

  @Column("int", {
    name: "accountid",
    nullable: true,
    comment: "账户ID",
    unsigned: true,
  })
  accountid: number | null;

  @Column("varchar", {
    name: "actorname",
    nullable: true,
    unique: true,
    comment: "玩家名字",
    length: 32,
  })
  actorname: string | null;

  @Column("int", {
    name: "icon",
    nullable: true,
    comment: "头像ID",
    default: () => "'0'",
  })
  icon: number | null;

  @Column("int", {
    name: "sex",
    nullable: true,
    comment: "性别",
    default: () => "'0'",
  })
  sex: number | null;

  @Column("int", {
    name: "level",
    nullable: true,
    comment: "等级",
    default: () => "'0'",
  })
  level: number | null;

  @Column("int", {
    name: "job",
    nullable: true,
    comment: "职业",
    default: () => "'0'",
  })
  job: number | null;

  @Column("int", {
    name: "posx",
    nullable: true,
    comment: "位置x",
    default: () => "'0'",
  })
  posx: number | null;

  @Column("int", {
    name: "posy",
    nullable: true,
    comment: "位置y",
    default: () => "'0'",
  })
  posy: number | null;

  @Column("bigint", {
    name: "exp",
    nullable: true,
    comment: "玩家的经验",
    default: () => "'0'",
  })
  exp: string | null;

  @Column("int", {
    name: "fbhandle",
    nullable: true,
    comment: "副本的handle",
    default: () => "'0'",
  })
  fbhandle: number | null;

  @Column("int", {
    name: "sceneid",
    nullable: true,
    comment: "场景id",
    default: () => "'0'",
  })
  sceneid: number | null;

  @Column("int", {
    name: "pkvalue",
    nullable: true,
    comment: "玩家的PK值",
    default: () => "'0'",
  })
  pkvalue: number | null;

  @Column("int", {
    name: "baggridcount",
    nullable: true,
    comment: "背包的格子数量:道具,装备,材料",
    default: () => "'0'",
  })
  baggridcount: number | null;

  @Column("int", {
    name: "deportgridcount",
    nullable: true,
    comment: "仓库每页格子数量",
    default: () => "'0'",
  })
  deportgridcount: number | null;

  @Column("int", {
    name: "zhanhunvalue",
    nullable: true,
    comment: "战魂值",
    default: () => "'0'",
  })
  zhanhunvalue: number | null;

  @Column("int", {
    name: "bindcoin",
    nullable: true,
    comment: "绑定金钱",
    unsigned: true,
    default: () => "'0'",
  })
  bindcoin: number | null;

  @Column("int", {
    name: "bindyuanbao",
    nullable: true,
    comment: "绑定元宝",
    unsigned: true,
    default: () => "'0'",
  })
  bindyuanbao: number | null;

  @Column("int", {
    name: "nonbindyuanbao",
    nullable: true,
    comment: "非绑定元宝",
    unsigned: true,
    default: () => "'0'",
  })
  nonbindyuanbao: number | null;

  @Column("int", {
    name: "nonbindcoin",
    nullable: true,
    comment: "非绑定金钱",
    unsigned: true,
    default: () => "'0'",
  })
  nonbindcoin: number | null;

  @Column("int", {
    name: "bekillcount",
    nullable: true,
    comment: "玩家的死亡次数",
    default: () => "'0'",
  })
  bekillcount: number | null;

  @Column("int", {
    name: "status",
    nullable: true,
    comment: "0位:已删除,1位:已禁用,2位:有效,3位:首选",
    default: () => "'1'",
  })
  status: number | null;

  @Column("int", {
    name: "hp",
    nullable: true,
    comment: "玩家的血",
    default: () => "'1'",
  })
  hp: number | null;

  @Column("int", {
    name: "mp",
    nullable: true,
    comment: "玩家的内力",
    default: () => "'1'",
  })
  mp: number | null;

  @Column("int", {
    name: "energy",
    nullable: true,
    comment: "玩家的活力，挂机用的",
    default: () => "'0'",
  })
  energy: number | null;

  @Column("int", {
    name: "qianlongling",
    nullable: true,
    comment: "潜龙令，一种代币，战场获得",
    default: () => "'0'",
  })
  qianlongling: number | null;

  @Column("int", {
    name: "guildid",
    comment: "玩家的帮派ID",
    unsigned: true,
    default: () => "'0'",
  })
  guildid: number;

  @Column("varchar", {
    name: "guildname",
    nullable: true,
    comment: "行会名称",
    length: 32,
  })
  guildname: string | null;

  @Column("int", {
    name: "teamid",
    nullable: true,
    comment: "队伍的ID",
    default: () => "'0'",
  })
  teamid: number | null;

  @Column("int", {
    name: "socialmask",
    nullable: true,
    comment: "玩家的社会关系，按位存储的",
    default: () => "'0'",
  })
  socialmask: number | null;

  @Column("int", {
    name: "guildexp",
    nullable: true,
    comment: "玩家的工会贡献度",
    default: () => "'0'",
  })
  guildexp: number | null;

  @Column("datetime", {
    name: "createtime",
    nullable: true,
    comment: "角色的创建时间",
  })
  createtime: Date | null;

  @Column("bigint", {
    name: "lastloginip",
    nullable: true,
    comment: "上次登录的ip",
    unsigned: true,
    default: () => "'0'",
  })
  lastloginip: string | null;

  @Column("datetime", {
    name: "updatetime",
    nullable: true,
    comment: "服务器的存盘时间，在这个点最后一次更新db",
  })
  updatetime: Date | null;

  @Column("int", {
    name: "deport2expiredtime",
    nullable: true,
    comment: "第2个仓库背包的过期时间",
    default: () => "'0'",
  })
  deport2expiredtime: number | null;

  @Column("int", {
    name: "deport3expiredtime",
    nullable: true,
    comment: "第3个仓库背包的过期时间",
    default: () => "'0'",
  })
  deport3expiredtime: number | null;

  @Column("int", {
    name: "deport4expiredtime",
    nullable: true,
    comment: "第4个仓库背包的过期时间",
    default: () => "'0'",
  })
  deport4expiredtime: number | null;

  @Column("varchar", {
    name: "accountname",
    nullable: true,
    comment: "账户的名字",
    length: 80,
  })
  accountname: string | null;

  @Column("int", {
    name: "enterfbsceneid",
    nullable: true,
    comment: "进入副本前的场景的ID",
    default: () => "'0'",
  })
  enterfbsceneid: number | null;

  @Column("int", {
    name: "enterfbpos",
    nullable: true,
    comment: "进入副本前的位置(X,y合并起来)",
    default: () => "'0'",
  })
  enterfbpos: number | null;

  @Column("int", {
    name: "dirrelated",
    nullable: true,
    comment: "玩家的朝向相关",
    default: () => "'0'",
  })
  dirrelated: number | null;

  @Column("bigint", {
    name: "mountexp",
    nullable: true,
    comment: "未使用的多倍经验",
    default: () => "'0'",
  })
  mountexp: string | null;

  @Column("int", {
    name: "lastlogintime",
    nullable: true,
    comment: "上次登录时间",
    default: () => "'0'",
  })
  lastlogintime: number | null;

  @Column("int", {
    name: "lastlogouttime",
    nullable: true,
    comment: "上次从逻辑服务器的退出时间,minitime格式的",
    default: () => "'0'",
  })
  lastlogouttime: number | null;

  @Column("int", {
    name: "serverindex",
    nullable: true,
    comment: "玩家所在的服务器的编号",
    default: () => "'0'",
  })
  serverindex: number | null;

  @Column("int", {
    name: "jumppower",
    nullable: true,
    comment: "跳跃体力和最大跳跃体力",
    default: () => "'0'",
  })
  jumppower: number | null;

  @Column("int", {
    name: "ltvicweek",
    nullable: true,
    comment: "本周的擂台胜利次数",
    default: () => "'0'",
  })
  ltvicweek: number | null;

  @Column("int", {
    name: "ltmaxvicweek",
    nullable: true,
    comment: "本周擂台最大连胜数",
    default: () => "'0'",
  })
  ltmaxvicweek: number | null;

  @Column("int", {
    name: "itdurvictimes",
    nullable: true,
    comment: "擂台战连胜数",
    default: () => "'0'",
  })
  itdurvictimes: number | null;

  @Column("bigint", {
    name: "csrevivepoint",
    nullable: true,
    comment: "普通场景的复活点，是场景id,x,y的组合",
    default: () => "'0'",
  })
  csrevivepoint: string | null;

  @Column("bigint", {
    name: "fbrevivepoint",
    nullable: true,
    comment: "副本复活点,场景id,x,y的复合体",
    default: () => "'0'",
  })
  fbrevivepoint: string | null;

  @Column("bigint", {
    name: "cityrevivepoint",
    nullable: true,
    comment: "城镇的复活点，是场景id，x,y的复合体",
    default: () => "'0'",
  })
  cityrevivepoint: string | null;

  @Column("int", {
    name: "achievepoint",
    nullable: true,
    comment: "玩家的成就点",
    default: () => "'0'",
  })
  achievepoint: number | null;

  @Column("int", {
    name: "zycont",
    nullable: true,
    comment: "阵营的贡献度",
    default: () => "'0'",
  })
  zycont: number | null;

  @Column("int", {
    name: "curtitleid",
    nullable: true,
    comment: "玩家当前的称号的ID",
    default: () => "'0'",
  })
  curtitleid: number | null;

  @Column("int", {
    name: "viplevel",
    nullable: true,
    comment: "vip的等级",
    default: () => "'0'",
  })
  viplevel: number | null;

  @Column("int", {
    name: "vipdurtime",
    nullable: true,
    comment: "本级vip已经持续的时间",
    unsigned: true,
    default: () => "'0'",
  })
  vipdurtime: number | null;

  @Column("int", {
    name: "vipcreatetime",
    nullable: true,
    comment: "成为本机vip的时间",
    unsigned: true,
    default: () => "'0'",
  })
  vipcreatetime: number | null;

  @Column("int", {
    name: "exptoday",
    nullable: true,
    comment: "玩家当天获得的经验的数值",
    default: () => "'0'",
  })
  exptoday: number | null;

  @Column("int", {
    name: "zhanhunvaluetoday",
    nullable: true,
    comment: "当日累计获取的战魂值",
    default: () => "'0'",
  })
  zhanhunvaluetoday: number | null;

  @Column("int", {
    name: "zy",
    nullable: true,
    comment: "玩家的阵营",
    default: () => "'0'",
  })
  zy: number | null;

  @Column("int", {
    name: "almirahlv",
    nullable: true,
    comment: "衣橱等级，低位时装，高位翅膀",
    default: () => "'0'",
  })
  almirahlv: number | null;

  @Column("int", {
    name: "fashionbattle",
    nullable: true,
    comment: "时装战力",
    default: () => "'0'",
  })
  fashionbattle: number | null;

  @Column("int", {
    name: "ybplant3",
    nullable: true,
    comment: "元宝的种植3",
    default: () => "'0'",
  })
  ybplant3: number | null;

  @Column("int", {
    name: "equipscore",
    nullable: true,
    comment: "装备的总分",
    unsigned: true,
    default: () => "'0'",
  })
  equipscore: number | null;

  @Column("int", {
    name: "consumeyb",
    nullable: true,
    comment: "消费的元宝",
    unsigned: true,
    default: () => "'0'",
  })
  consumeyb: number | null;

  @Column("int", {
    name: "n_51",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  n_51: number | null;

  @Column("int", {
    name: "zycontrtoday",
    nullable: true,
    comment: "今天获得的阵营贡献",
    default: () => "'0'",
  })
  zycontrtoday: number | null;

  @Column("int", {
    name: "drawybcount",
    nullable: true,
    comment: "玩家提取的元宝的数目",
    default: () => "'0'",
  })
  drawybcount: number | null;

  @Column("int", {
    name: "activity",
    nullable: true,
    comment: "活跃度",
    default: () => "'0'",
  })
  activity: number | null;

  @Column("int", {
    name: "battlepower",
    nullable: true,
    comment: "战力",
    default: () => "'0'",
  })
  battlepower: number | null;

  @Column("int", {
    name: "lastloginserverid",
    nullable: true,
    comment: "最后一次上线所在的服务器Id",
    default: () => "'0'",
  })
  lastloginserverid: number | null;

  @Column("int", {
    name: "stallgridcount",
    nullable: true,
    comment: "摊位的格子数",
    default: () => "'0'",
  })
  stallgridcount: number | null;

  @Column("int", {
    name: "honourval",
    nullable: true,
    comment: "荣誉值",
    default: () => "'0'",
  })
  honourval: number | null;

  @Column("int", {
    name: "honourlv",
    nullable: true,
    comment: "低16位荣誉等级\r\n            高16buff等级",
    default: () => "'0'",
  })
  honourlv: number | null;

  @Column("int", {
    name: "honourbuffdl",
    nullable: true,
    comment: "过期时间 dealine",
    default: () => "'0'",
  })
  honourbuffdl: number | null;

  @Column("int", {
    name: "circle",
    nullable: true,
    comment: "玩家的转生次数",
    default: () => "'0'",
  })
  circle: number | null;

  @Column("int", {
    name: "circlesoul",
    nullable: true,
    comment: "玩家的转生灵魄",
    default: () => "'0'",
  })
  circlesoul: number | null;

  @Column("varchar", {
    name: "nmood",
    nullable: true,
    comment: "心情",
    length: 64,
  })
  nmood: string | null;

  @Column("int", {
    name: "nanger",
    nullable: true,
    comment: "怒气",
    default: () => "'0'",
  })
  nanger: number | null;

  @Column("int", {
    name: "nidentifytimes",
    nullable: true,
    comment: "身上装备鉴定数",
    default: () => "'0'",
  })
  nidentifytimes: number | null;

  @Column("int", {
    name: "checkins",
    nullable: true,
    comment: "签到次数",
    default: () => "'0'",
  })
  checkins: number | null;

  @Column("int", {
    name: "exploit",
    nullable: true,
    comment: "功勋值",
    default: () => "'0'",
  })
  exploit: number | null;

  @Column("int", {
    name: "n_68",
    nullable: true,
    comment: "坐骑等级",
    default: () => "'0'",
  })
  n_68: number | null;

  @Column("int", { name: "nResInt_135", nullable: true, default: () => "'0'" })
  nResInt_135: number | null;

  @Column("int", { name: "n_70", nullable: true, default: () => "'0'" })
  n_70: number | null;

  @Column("int", { name: "nResInt_42", nullable: true, default: () => "'0'" })
  nResInt_42: number | null;

  @Column("int", {
    name: "rideexpiredtime",
    nullable: true,
    comment: "时效坐骑过期时间",
    default: () => "'0'",
  })
  rideexpiredtime: number | null;

  @Column("int", {
    name: "storepoint",
    nullable: true,
    comment: "商城积分",
    default: () => "'0'",
  })
  storepoint: number | null;

  @Column("bigint", {
    name: "workday",
    nullable: true,
    comment: "活动与副本当日未完成次数",
    default: () => "'0'",
  })
  workday: string | null;

  @Column("bigint", {
    name: "work1day",
    nullable: true,
    comment: "活动与副本第1日未完成次数",
    default: () => "'0'",
  })
  work1day: string | null;

  @Column("bigint", {
    name: "work2day",
    nullable: true,
    comment: "活动与副本第2日未完成次数",
    default: () => "'0'",
  })
  work2day: string | null;

  @Column("bigint", {
    name: "work3day",
    nullable: true,
    comment: "活动与副本第3日未完成次数",
    default: () => "'0'",
  })
  work3day: string | null;

  @Column("int", {
    name: "swinglevel",
    nullable: true,
    comment: "翅膀档次",
    default: () => "'0'",
  })
  swinglevel: number | null;

  @Column("int", { name: "n_93", nullable: true, default: () => "'0'" })
  n_93: number | null;

  @Column("int", {
    name: "nswingid",
    nullable: true,
    comment: "翅膀的id",
    default: () => "'0'",
  })
  nswingid: number | null;

  @Column("int", {
    name: "logindays",
    nullable: true,
    comment: "登陆的天数",
    default: () => "'0'",
  })
  logindays: number | null;

  @Column("varchar", {
    name: "token",
    nullable: true,
    comment: "运营商渠道",
    length: 64,
  })
  token: string | null;

  @Column("int", {
    name: "adid",
    nullable: true,
    comment: "广告id",
    default: () => "'0'",
  })
  adid: number | null;

  @Column("varchar", {
    name: "depotlockpwd",
    nullable: true,
    comment: "仓库锁密码",
    length: 32,
  })
  depotlockpwd: string | null;

  @Column("int", {
    name: "signin",
    nullable: true,
    comment: "每日签到标识",
    default: () => "'0'",
  })
  signin: number | null;

  @Column("int", {
    name: "salary",
    nullable: true,
    comment: "工资点数",
    default: () => "'0'",
  })
  salary: number | null;

  @Column("int", {
    name: "depotyb",
    nullable: true,
    comment: "仓库元宝",
    default: () => "'0'",
  })
  depotyb: number | null;

  @Column("int", {
    name: "depotcoin",
    nullable: true,
    comment: "仓库金币",
    default: () => "'0'",
  })
  depotcoin: number | null;

  @Column("int", {
    name: "magicpower",
    nullable: true,
    comment: "灵力",
    default: () => "'0'",
  })
  magicpower: number | null;

  @Column("int", {
    name: "magicbattle",
    nullable: true,
    comment: "法宝战力",
    default: () => "'0'",
  })
  magicbattle: number | null;

  @Column("int", { name: "zhanxunpoint", nullable: true, default: () => "'0'" })
  zhanxunpoint: number | null;

  @Column("int", { name: "vipgrade", nullable: true, default: () => "'0'" })
  vipgrade: number | null;

  @Column("int", { name: "vippoint", nullable: true, default: () => "'0'" })
  vippoint: number | null;

  @Column("int", {
    name: "bagtime",
    nullable: true,
    comment: "背包在线时间累积",
    default: () => "'0'",
  })
  bagtime: number | null;

  @Column("int", {
    name: "killmonstercount",
    nullable: true,
    comment: "玩家杀怪总数",
    default: () => "'0'",
  })
  killmonstercount: number | null;

  @Column("int", {
    name: "militaryscore",
    nullable: true,
    comment: "战绩",
    default: () => "'0'",
  })
  militaryscore: number | null;

  @Column("int", {
    name: "totalonlinesecond",
    nullable: true,
    comment: "玩家在线时长秒",
    default: () => "'0'",
  })
  totalonlinesecond: number | null;

  @Column("int", {
    name: "medalexp",
    nullable: true,
    comment: "战章经验",
    default: () => "'0'",
  })
  medalexp: number | null;

  @Column("int", {
    name: "todayexploit",
    nullable: true,
    comment: "上次登录对应所在服的开服天数",
    default: () => "'0'",
  })
  todayexploit: number | null;

  @Column("int", {
    name: "winglevel",
    nullable: true,
    comment: "翅膀等级",
    default: () => "'0'",
  })
  winglevel: number | null;

  @Column("int", {
    name: "onlinestatus",
    nullable: true,
    comment: "在线标识",
    default: () => "'0'",
  })
  onlinestatus: number | null;

  @Column("int", {
    name: "pdlevel",
    nullable: true,
    comment: "紫钻等级",
    default: () => "'0'",
  })
  pdlevel: number | null;

  @Column("int", {
    name: "pdtype",
    nullable: true,
    comment: "紫钻类型",
    default: () => "'0'",
  })
  pdtype: number | null;

  @Column("int", {
    name: "maxattack",
    nullable: true,
    comment: "玩家最大攻击力，只保存给排行榜查询",
    default: () => "'0'",
  })
  maxattack: number | null;

  @Column("int", {
    name: "killscore",
    nullable: true,
    comment: "战绩",
    default: () => "'0'",
  })
  killscore: number | null;

  @Column("int", {
    name: "todaykillscore",
    nullable: true,
    comment: "今日战绩",
    default: () => "'0'",
  })
  todaykillscore: number | null;

  @Column("int", {
    name: "boratFlyShoes",
    comment: "喇叭数量和飞鞋数量",
    default: () => "'0'",
  })
  boratFlyShoes: number;

  @Column("int", {
    name: "recyclepoints",
    comment: "回收积分数值",
    default: () => "'0'",
  })
  recyclepoints: number;

  @Column("bigint", { name: "jmhjy", comment: "经脉", default: () => "'0'" })
  jmhjy: string;

  @Column("int", { name: "shutUptime", comment: "‌禁言时间" })
  shutUptime: number;

  @Column("int", {
    name: "oldserverindex",
    comment: "原区服serverid",
    default: () => "'0'",
  })
  oldserverindex: number;

  @Column("bigint", {
    name: "tradingquota",
    comment: "交易额度",
    default: () => "'0'",
  })
  tradingquota: string;
}
