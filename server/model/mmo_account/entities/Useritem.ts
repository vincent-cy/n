import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("useritem", { schema: "mmo_account" })
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
    comment: "物品的id,大于100000表示金钱，100000绑定银两,100001：银两，，类推",
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
    comment: "'目标服务器ID,0表示所有，否则特定的服务器",
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
}
