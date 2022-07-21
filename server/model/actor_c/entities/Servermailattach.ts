import { Column, Entity, Index } from "typeorm";

@Index("index_servermailid", ["servermailid"], {})
@Entity("servermailattach", { schema: "actor_c1001" })
export class Servermailattach {
  @Column("int", {
    name: "servermailid",
    nullable: true,
    comment: "全服邮件id",
  })
  servermailid: number | null;

  @Column("int", {
    name: "type",
    nullable: true,
    comment: "奖励类型",
    default: () => "'0'",
  })
  type: number | null;

  @Column("int", {
    name: "id",
    nullable: true,
    comment: "物品id",
    default: () => "'0'",
  })
  id: number | null;

  @Column("int", {
    name: "quality",
    nullable: true,
    comment: "品质",
    default: () => "'0'",
  })
  quality: number | null;

  @Column("int", {
    name: "count",
    nullable: true,
    comment: "数量",
    default: () => "'0'",
  })
  count: number | null;

  @Column("int", {
    name: "bind",
    nullable: true,
    comment: "绑定",
    default: () => "'0'",
  })
  bind: number | null;

  @Column("int", {
    name: "star",
    nullable: true,
    comment: "强化星级",
    default: () => "'0'",
  })
  star: number | null;

  @Column("int", {
    name: "starlost",
    nullable: true,
    comment: "强化损失星级",
    default: () => "'0'",
  })
  starlost: number | null;

  @Column("int", {
    name: "inscriptlevel",
    nullable: true,
    comment: "铭刻等级",
    default: () => "'0'",
  })
  inscriptlevel: number | null;

  @Column("int", {
    name: "inscriptexp",
    nullable: true,
    comment: "铭刻经验",
    default: () => "'0'",
  })
  inscriptexp: number | null;

  @Column("int", {
    name: "luck",
    nullable: true,
    comment: "幸运",
    default: () => "'0'",
  })
  luck: number | null;

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
    comment: "极品属性3\n",
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

  @Column("int", {
    name: "identifyslotnum",
    nullable: true,
    comment: "鉴定属性槽被解锁的数量",
    default: () => "'0'",
  })
  identifyslotnum: number | null;

  @Column("int", {
    name: "identifynum",
    nullable: true,
    comment: "物品已经被鉴定的次数",
    default: () => "'0'",
  })
  identifynum: number | null;
}
