import { Column, Entity, Index } from "typeorm";

@Index("index_guildid", ["guildid"], {})
@Entity("guildstore", { schema: "actor_c1001" })
export class Guildstore {
  @Column("int", {
    name: "guildid",
    nullable: true,
    comment: "帮会ID",
    unsigned: true,
    default: () => "'0'",
  })
  guildid: number | null;

  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "角色id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("bigint", {
    name: "itemguid",
    nullable: true,
    comment: "物品的Guid",
    default: () => "'0'",
  })
  itemguid: string | null;

  @Column("int", {
    name: "itemidquastrong",
    nullable: true,
    comment: "物品的ID，品质等级，强化等级",
    default: () => "'0'",
  })
  itemidquastrong: number | null;

  @Column("int", {
    name: "itemduration",
    nullable: true,
    comment: "物品的耐久以及耐久上限",
    default: () => "'0'",
  })
  itemduration: number | null;

  @Column("int", {
    name: "itemcountflag",
    nullable: true,
    comment: "物品的数量以及标记",
    default: () => "'0'",
  })
  itemcountflag: number | null;

  @Column("int", {
    name: "iteminlayhole",
    nullable: true,
    comment: "物品的打孔信息",
    default: () => "'0'",
  })
  iteminlayhole: number | null;

  @Column("int", {
    name: "itemtime",
    nullable: true,
    comment: "物品的过期时间",
    default: () => "'0'",
  })
  itemtime: number | null;

  @Column("int", {
    name: "itemsmith1",
    nullable: true,
    comment: "极品属性1",
    default: () => "'0'",
  })
  itemsmith1: number | null;

  @Column("int", {
    name: "itemsmith2",
    nullable: true,
    comment: "极品属性2",
    default: () => "'0'",
  })
  itemsmith2: number | null;

  @Column("int", {
    name: "itemsmith3",
    nullable: true,
    comment: "极品属性3",
    default: () => "'0'",
  })
  itemsmith3: number | null;

  @Column("int", {
    name: "itemsmith4",
    nullable: true,
    comment: "极品属性4",
    default: () => "'0'",
  })
  itemsmith4: number | null;

  @Column("int", {
    name: "itemsmith5",
    nullable: true,
    comment: "极品属性5",
    default: () => "'0'",
  })
  itemsmith5: number | null;

  @Column("int", {
    name: "initsmith",
    nullable: true,
    comment: "初始化的精锻属性",
    default: () => "'0'",
  })
  initsmith: number | null;

  @Column("int", {
    name: "ntype",
    nullable: true,
    comment: "取出需要的钱的类型 1 为金币 2 为元宝",
    default: () => "'0'",
  })
  ntype: number | null;

  @Column("int", {
    name: "nmoney",
    nullable: true,
    comment: "钱的数量",
    default: () => "'0'",
  })
  nmoney: number | null;

  @Column("int", {
    name: "itemreservs",
    nullable: true,
    comment: "预留1",
    default: () => "'0'",
  })
  itemreservs: number | null;

  @Column("int", { name: "itemreservs2", nullable: true, default: () => "'0'" })
  itemreservs2: number | null;

  @Column("int", {
    name: "exchangeactorid",
    nullable: true,
    comment: "申请兑换的玩家id",
    unsigned: true,
    default: () => "'0'",
  })
  exchangeactorid: number | null;

  @Column("varchar", {
    name: "exchangeactorname",
    nullable: true,
    comment: "申请兑换的玩家NAME",
    length: 32,
  })
  exchangeactorname: string | null;

  @Column("int", {
    name: "exchangetime",
    nullable: true,
    comment: "申请兑换的时间",
    unsigned: true,
    default: () => "'0'",
  })
  exchangetime: number | null;
}
