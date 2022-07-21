import { Column, Entity, Index } from "typeorm";

@Index("consignItem_id", ["actorid"], {})
@Entity("consignmentitem", { schema: "actor_c1001" })
export class Consignmentitem {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "角色ID",
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
    comment: "物品的ID",
    default: () => "'0'",
  })
  itemidquastrong: number | null;

  @Column("int", {
    name: "itemduration",
    nullable: true,
    comment: "物品的星级",
    default: () => "'0'",
  })
  itemduration: number | null;

  @Column("int", {
    name: "itemcountflag",
    nullable: true,
    comment: "物品的数量",
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
    name: "itemreservs",
    nullable: true,
    comment: "保留",
    default: () => "'0'",
  })
  itemreservs: number | null;

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
    name: "itemreservs2",
    nullable: true,
    comment: "保留字节2",
    default: () => "'0'",
  })
  itemreservs2: number | null;

  @Column("int", {
    name: "initsmith",
    nullable: true,
    comment: "初始化的精锻属性",
    default: () => "'0'",
  })
  initsmith: number | null;

  @Column("int", {
    name: "selltime",
    nullable: true,
    comment: "寄卖的时间",
    unsigned: true,
    default: () => "'0'",
  })
  selltime: number | null;

  @Column("int", {
    name: "price",
    nullable: true,
    comment: "物品单价",
    default: () => "'0'",
  })
  price: number | null;

  @Column("int", {
    name: "state",
    nullable: true,
    comment: "状态",
    default: () => "'0'",
  })
  state: number | null;

  @Column("int", {
    name: "serverindex",
    nullable: true,
    comment: "服务器id",
    default: () => "'0'",
  })
  serverindex: number | null;

  @Column("varchar", { name: "bestAttr", comment: "极品属性", length: 50 })
  bestAttr: string;

  @Column("varchar", { name: "sourcename", comment: "归属name", length: 200 })
  sourcename: string;

  @Column("int", {
    name: "autoid",
    comment: "是否是系统",
    default: () => "'0'",
  })
  autoid: number;
}
