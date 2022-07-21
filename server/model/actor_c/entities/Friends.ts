import { Column, Entity, Index } from "typeorm";

@Index("Index_actorid", ["nactorid"], {})
@Entity("friends", { schema: "actor_c1001" })
export class Friends {
  @Column("int", {
    name: "nactorid",
    nullable: true,
    comment: "玩家的id",
    unsigned: true,
    default: () => "'0'",
  })
  nactorid: number | null;

  @Column("int", {
    name: "friendid",
    nullable: true,
    comment: "好友的id",
    unsigned: true,
    default: () => "'0'",
  })
  friendid: number | null;

  @Column("int", {
    name: "ntype",
    nullable: true,
    comment: "关系 1 好友 2 陌生人 3 仇敌 4 黑名单",
    default: () => "'0'",
  })
  ntype: number | null;

  @Column("int", {
    name: "nintimacy",
    nullable: true,
    comment: "亲密度",
    default: () => "'0'",
  })
  nintimacy: number | null;

  @Column("bigint", {
    name: "warteamid",
    nullable: true,
    comment: "战队id",
    default: () => "'0'",
  })
  warteamid: string | null;

  @Column("int", {
    name: "reserver",
    nullable: true,
    comment: "预留",
    default: () => "'0'",
  })
  reserver: number | null;

  @Column("int", {
    name: "dotime",
    nullable: true,
    comment: "生成关系的时间",
    default: () => "'0'",
  })
  dotime: number | null;

  @Column("int", { name: "color", comment: "颜色", default: () => "'0'" })
  color: number;
}
