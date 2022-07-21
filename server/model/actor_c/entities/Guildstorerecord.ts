import { Column, Entity, Index } from "typeorm";

@Index("index_guildid", ["guildid"], {})
@Entity("guildstorerecord", { schema: "actor_c1001" })
export class Guildstorerecord {
  @Column("int", { name: "guildid", nullable: true, unsigned: true })
  guildid: number | null;

  @Column("int", {
    name: "ntype",
    nullable: true,
    comment: "类型 1 存入 2 取出",
    default: () => "'0'",
  })
  ntype: number | null;

  @Column("int", {
    name: "ntime",
    nullable: true,
    comment: "时间",
    default: () => "'0'",
  })
  ntime: number | null;

  @Column("varchar", {
    name: "actorname",
    nullable: true,
    comment: "玩家姓名",
    length: 32,
  })
  actorname: string | null;

  @Column("varchar", {
    name: "itemname",
    nullable: true,
    comment: "物品名称",
    length: 32,
  })
  itemname: string | null;

  @Column("int", {
    name: "itemnum",
    nullable: true,
    comment: "物品数量",
    default: () => "'0'",
  })
  itemnum: number | null;

  @Column("int", {
    name: "cointype",
    nullable: true,
    comment: "钱的类型",
    default: () => "'0'",
  })
  cointype: number | null;

  @Column("int", {
    name: "coinnum",
    nullable: true,
    comment: "钱的数量",
    default: () => "'0'",
  })
  coinnum: number | null;

  @Column("int", {
    name: "reserver",
    nullable: true,
    comment: "预留",
    default: () => "'0'",
  })
  reserver: number | null;
}
