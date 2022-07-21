import { Column, Entity, Index } from "typeorm";

@Index("Index_1", ["actorid"], {})
@Entity("actorpets", { schema: "actor_c1001" })
export class Actorpets {
  @Column("bigint", {
    name: "actorid",
    nullable: true,
    comment: "玩家的actorid",
    unsigned: true,
  })
  actorid: string | null;

  @Column("bigint", {
    name: "exp",
    nullable: true,
    comment: "经验",
    unsigned: true,
    default: () => "'0'",
  })
  exp: string | null;

  @Column("int", {
    name: "hp",
    nullable: true,
    comment: "当前的血",
    unsigned: true,
    default: () => "'0'",
  })
  hp: number | null;

  @Column("int", {
    name: "mp",
    nullable: true,
    comment: "当前的蓝",
    unsigned: true,
    default: () => "'0'",
  })
  mp: number | null;

  @Column("char", { name: "name", nullable: true, comment: "名字", length: 32 })
  name: string | null;

  @Column("int", {
    name: "circle",
    nullable: true,
    comment: "转数",
    unsigned: true,
    default: () => "'0'",
  })
  circle: number | null;

  @Column("int", {
    name: "level",
    nullable: true,
    comment: "等级",
    unsigned: true,
    default: () => "'0'",
  })
  level: number | null;

  @Column("int", {
    name: "ids",
    nullable: true,
    comment: "英雄的id,状态，头像合并起来的",
    default: () => "'0'",
  })
  ids: number | null;

  @Column("int", {
    name: "modelid",
    nullable: true,
    comment: "模型id",
    default: () => "'0'",
  })
  modelid: number | null;

  @Column("int", {
    name: "weaponappear",
    nullable: true,
    comment: "武器的外观",
    default: () => "'0'",
  })
  weaponappear: number | null;

  @Column("int", {
    name: "score",
    nullable: true,
    comment: "评分",
    default: () => "'0'",
  })
  score: number | null;

  @Column("int", {
    name: "vocation",
    nullable: true,
    comment: "职业",
    default: () => "'0'",
  })
  vocation: number | null;

  @Column("int", {
    name: "sex",
    nullable: true,
    comment: "性别",
    default: () => "'0'",
  })
  sex: number | null;

  @Column("int", {
    name: "swingappear",
    nullable: true,
    comment: "翅膀的外观",
    default: () => "'0'",
  })
  swingappear: number | null;

  @Column("int", {
    name: "reserver1",
    nullable: true,
    comment: "保留的",
    default: () => "'0'",
  })
  reserver1: number | null;

  @Column("int", {
    name: "reserver2",
    nullable: true,
    comment: "预留的2",
    default: () => "'0'",
  })
  reserver2: number | null;

  @Column("int", {
    name: "stage",
    nullable: true,
    comment: "英雄阶",
    default: () => "'0'",
  })
  stage: number | null;

  @Column("int", {
    name: "bodyforce",
    nullable: true,
    comment: "英雄体力",
    default: () => "'0'",
  })
  bodyforce: number | null;

  @Column("int", {
    name: "bless",
    nullable: true,
    comment: "英雄祝福值",
    default: () => "'0'",
  })
  bless: number | null;
}
