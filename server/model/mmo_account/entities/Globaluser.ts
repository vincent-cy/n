import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("AK_Key_account", ["account"], { unique: true })
@Index("index_identity", ["identity"], {})
@Entity("globaluser", { schema: "mmo_account" })
export class Globaluser {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "userid",
    comment: "用户唯一ID，自增字段",
    unsigned: true,
  })
  userid: number;

  @Column("varchar", {
    name: "account",
    nullable: true,
    unique: true,
    comment: "用户帐户的字符串",
    length: 64,
  })
  account: string | null;

  @Column("varchar", {
    name: "passwd",
    nullable: true,
    comment: "玩家的密码",
    length: 32,
  })
  passwd: string | null;

  @Column("varchar", {
    name: "identity",
    nullable: true,
    comment: "玩家的身份证号码",
    length: 32,
  })
  identity: string | null;

  @Column("datetime", {
    name: "createtime",
    nullable: true,
    comment: "帐号的创建时间",
  })
  createtime: Date | null;

  @Column("datetime", {
    name: "updatetime",
    nullable: true,
    comment: "上次登录时间",
  })
  updatetime: Date | null;

  @Column("bigint", {
    name: "updateip",
    nullable: true,
    comment: "用户上次登录的IP地址，64位整形IP地址，支持IPV6(现在记录创账号ip)",
  })
  updateip: string | null;

  @Column("datetime", {
    name: "offlinetime",
    nullable: true,
    comment: "用户离线时间，用于防沉迷判断当前登录距离上次下线是否足5小时",
  })
  offlinetime: Date | null;

  @Column("int", {
    name: "fcmonline",
    nullable: true,
    comment: "连续在线时间，用于进行防沉迷控制",
    default: () => "'0'",
  })
  fcmonline: number | null;

  @Column("int", {
    name: "totalonline",
    nullable: true,
    comment: "账号自创建以来的累积在线时长，单位是秒",
    default: () => "'0'",
  })
  totalonline: number | null;

  @Column("int", {
    name: "gmlevel",
    nullable: true,
    comment: "玩家的GM等级，普通玩家是0.GM等级越高表示权限越高。1-10级GM",
    default: () => "'0'",
  })
  gmlevel: number | null;

  @Column("int", {
    name: "inserver",
    nullable: true,
    comment: "玩家在的服务器的index",
    default: () => "'0'",
  })
  inserver: number | null;
}
