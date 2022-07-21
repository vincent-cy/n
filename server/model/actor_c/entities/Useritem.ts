import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("useritem_accountid", ["accountid"], {})
@Index("useritem_actorid", ["actorid"], {})
@Entity("useritem", { schema: "actor_c1001" })
export class Useritem {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("int", {
    name: "accountid",
    nullable: true,
    comment: "帐户id，如果是角色绑定，这个填0",
    unsigned: true,
    default: () => "'0'",
  })
  accountid: number | null;

  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "角色id，如果是账户id绑定的物品，这个写0",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "itemid",
    nullable: true,
    comment: "物品的id,大于100000表示金钱",
    default: () => "'0'",
  })
  itemid: number | null;

  @Column("tinyint", {
    name: "bind",
    nullable: true,
    comment: "绑定属性",
    default: () => "'0'",
  })
  bind: number | null;

  @Column("tinyint", {
    name: "strong",
    nullable: true,
    comment: "强化值",
    default: () => "'0'",
  })
  strong: number | null;

  @Column("tinyint", {
    name: "quality",
    nullable: true,
    comment: "品质",
    default: () => "'0'",
  })
  quality: number | null;

  @Column("int", {
    name: "itemcount",
    nullable: true,
    comment: "送的物品(金钱的）数量",
    default: () => "'1'",
  })
  itemcount: number | null;

  @Column("int", {
    name: "serverindex",
    nullable: true,
    comment: "服务器id",
    default: () => "'0'",
  })
  serverindex: number | null;

  @Column("varchar", {
    name: "memo",
    nullable: true,
    comment: "简单的注释，比如活动的名称",
    length: 32,
  })
  memo: string | null;

  @Column("int", {
    name: "reser1",
    nullable: true,
    comment: "保留字段1",
    default: () => "'0'",
  })
  reser1: number | null;

  @Column("int", {
    name: "reser2",
    nullable: true,
    comment: "保留字段2",
    default: () => "'0'",
  })
  reser2: number | null;

  @Column("int", {
    name: "smith1",
    nullable: true,
    comment: "极品属性1",
    default: () => "'0'",
  })
  smith1: number | null;

  @Column("int", {
    name: "smith2",
    nullable: true,
    comment: "极品属性2",
    default: () => "'0'",
  })
  smith2: number | null;

  @Column("int", {
    name: "smith3",
    nullable: true,
    comment: "极品属性3",
    default: () => "'0'",
  })
  smith3: number | null;

  @Column("int", {
    name: "smith4",
    nullable: true,
    comment: "极品属性4",
    default: () => "'0'",
  })
  smith4: number | null;

  @Column("int", {
    name: "smith5",
    nullable: true,
    comment: "极品属性5",
    default: () => "'0'",
  })
  smith5: number | null;

  @Column("int", { name: "initsmith", nullable: true, default: () => "'0'" })
  initsmith: number | null;
}
