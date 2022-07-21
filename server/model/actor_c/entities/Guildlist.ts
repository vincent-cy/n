import { Column, Entity, Index } from "typeorm";

@Index("index_guildid", ["guildid"], {})
@Entity("guildlist", { schema: "actor_c1001" })
export class Guildlist {
  @Column("int", { name: "guildid", comment: "帮派的id", unsigned: true })
  guildid: number;

  @Column("int", {
    name: "actorId",
    comment: "行会会长id",
    default: () => "'0'",
  })
  actorId: number;

  @Column("varchar", {
    name: "guildname",
    nullable: true,
    comment: "帮派的名字",
    length: 32,
  })
  guildname: string | null;

  @Column("varchar", {
    name: "foundname",
    nullable: true,
    comment: "创建者的名字",
    length: 32,
  })
  foundname: string | null;

  @Column("varchar", {
    name: "leadername",
    nullable: true,
    comment: "帮主名字",
    length: 32,
  })
  leadername: string | null;

  @Column("int", {
    name: "level",
    nullable: true,
    comment: "帮派的等级",
    default: () => "'1'",
  })
  level: number | null;

  @Column("varchar", {
    name: "inmemo",
    nullable: true,
    comment: "内部公告",
    length: 500,
  })
  inmemo: string | null;

  @Column("varchar", {
    name: "outmemo",
    nullable: true,
    comment: "外部公告",
    length: 500,
  })
  outmemo: string | null;

  @Column("int", {
    name: "status",
    nullable: true,
    comment: "帮派的状态",
    default: () => "'1'",
  })
  status: number | null;

  @Column("datetime", {
    name: "createtime",
    nullable: true,
    comment: "帮派创建时间",
  })
  createtime: Date | null;

  @Column("int", {
    name: "serverindex",
    nullable: true,
    comment: "帮派所在的服务器编号",
  })
  serverindex: number | null;

  @Column("int", {
    name: "guildcoin",
    nullable: true,
    comment: "帮派资金",
    default: () => "'0'",
  })
  guildcoin: number | null;

  @Column("varchar", {
    name: "qqgroupid",
    nullable: true,
    comment: "qq群id",
    length: 32,
    default: () => "'0'",
  })
  qqgroupid: string | null;

  @Column("int", {
    name: "yytpye",
    nullable: true,
    comment: "语音频道类型",
    default: () => "'0'",
  })
  yytpye: number | null;

  @Column("varchar", { name: "yygrilcompere", nullable: true, length: 32 })
  yygrilcompere: string | null;

  @Column("varchar", {
    name: "yygroupid",
    nullable: true,
    comment: "语音频道id",
    length: 32,
    default: () => "'0'",
  })
  yygroupid: string | null;

  @Column("varchar", {
    name: "yymemo",
    nullable: true,
    comment: "语音频道宣言",
    length: 500,
  })
  yymemo: string | null;

  @Column("int", {
    name: "nbidcoin",
    nullable: true,
    comment: "竞价数量",
    default: () => "'0'",
  })
  nbidcoin: number | null;

  @Column("int", {
    name: "nmask",
    nullable: true,
    comment: "0  添加成员需要审核 1 直接加入",
    default: () => "'0'",
  })
  nmask: number | null;

  @Column("varchar", {
    name: "groupmemo",
    nullable: true,
    comment: "群公告",
    length: 500,
  })
  groupmemo: string | null;

  @Column("int", {
    name: "signupflag",
    nullable: true,
    comment: "报名标志",
    default: () => "'0'",
  })
  signupflag: number | null;

  @Column("int", {
    name: "reserver",
    nullable: true,
    comment: "召集时间",
    unsigned: true,
    default: () => "'0'",
  })
  reserver: number | null;

  @Column("int", {
    name: "halllevel",
    nullable: true,
    comment: "主殿等级",
    default: () => "'0'",
  })
  halllevel: number | null;

  @Column("int", {
    name: "exerciseroomlv",
    comment: "练功房等级",
    default: () => "'0'",
  })
  exerciseroomlv: number;

  @Column("int", {
    name: "assemblyhalllv",
    comment: "议事厅等级",
    default: () => "'0'",
  })
  assemblyhalllv: number;

  @Column("int", {
    name: "storelevl",
    nullable: true,
    comment: "行会商店等级",
    default: () => "'0'",
  })
  storelevl: number | null;

  @Column("int", {
    name: "moonboxlev",
    nullable: true,
    comment: "月光宝盒等级",
    default: () => "'0'",
  })
  moonboxlev: number | null;

  @Column("int", {
    name: "nbosslev",
    nullable: true,
    comment: "行会封印兽碑的等级",
    default: () => "'0'",
  })
  nbosslev: number | null;

  @Column("int", {
    name: "nchanllengetimes",
    nullable: true,
    comment: "行会封印兽碑挑战次数",
    default: () => "'0'",
  })
  nchanllengetimes: number | null;

  @Column("int", {
    name: "nupnexttime",
    nullable: true,
    comment: "行会建筑下次升级的时间",
    default: () => "'0'",
  })
  nupnexttime: number | null;

  @Column("int", {
    name: "autojoinlevel",
    nullable: true,
    comment: "自动加入行会的等级要求",
    default: () => "'0'",
  })
  autojoinlevel: number | null;

  @Column("int", {
    name: "upgradeitemnum1",
    nullable: true,
    comment: "行会升级道具1数量",
    default: () => "'0'",
  })
  upgradeitemnum1: number | null;

  @Column("int", {
    name: "upgradeitemnum2",
    nullable: true,
    comment: "行会升级道具2数量",
    default: () => "'0'",
  })
  upgradeitemnum2: number | null;

  @Column("int", {
    name: "upgradeitemnum3",
    nullable: true,
    comment: "行会升级道具3数量",
    default: () => "'0'",
  })
  upgradeitemnum3: number | null;

  @Column("int", {
    name: "treelevel",
    nullable: true,
    comment: "行会神树等级",
    default: () => "'1'",
  })
  treelevel: number | null;

  @Column("int", {
    name: "treedegree",
    nullable: true,
    comment: "行会神树进度",
    default: () => "'0'",
  })
  treedegree: number | null;

  @Column("int", {
    name: "fruitlevel",
    nullable: true,
    comment: "行会神树果实等级",
    default: () => "'1'",
  })
  fruitlevel: number | null;

  @Column("int", {
    name: "fruitdegree",
    nullable: true,
    comment: "行会神树果实进度",
    default: () => "'0'",
  })
  fruitdegree: number | null;

  @Column("int", {
    name: "fruitnum",
    nullable: true,
    comment: "行会神树果实数量",
    default: () => "'0'",
  })
  fruitnum: number | null;

  @Column("int", {
    name: "fruittime",
    nullable: true,
    comment: "行会神树进入结果期的时间",
    unsigned: true,
    default: () => "'0'",
  })
  fruittime: number | null;

  @Column("int", {
    name: "taskid",
    nullable: true,
    comment: "行会任务ID",
    default: () => "'0'",
  })
  taskid: number | null;

  @Column("int", {
    name: "tasksche",
    nullable: true,
    comment: "行会任务进度",
    default: () => "'0'",
  })
  tasksche: number | null;

  @Column("int", {
    name: "dailycoindonated",
    nullable: true,
    comment: "行会每日捐献的资金",
    default: () => "'0'",
  })
  dailycoindonated: number | null;

  @Column("int", {
    name: "certification",
    nullable: true,
    comment: "官方认证",
    default: () => "'0'",
  })
  certification: number | null;
}
