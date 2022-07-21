import { Column, Entity, Index } from "typeorm";

@Index("actor_id", ["actorid"], {})
@Entity("actorpetitem", { schema: "actor_c1001" })
export class Actorpetitem {
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
    comment: "物品的Guid是",
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

  @Column("varchar", { name: "bestAttr", comment: "极品属性", length: 50 })
  bestAttr: string;

  @Column("varchar", { name: "refining", comment: "洗炼属性", length: 50 })
  refining: string;

  @Column("varchar", { name: "sourcename", comment: "归属name", length: 200 })
  sourcename: string;
}
