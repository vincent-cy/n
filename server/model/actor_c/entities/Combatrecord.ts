import { Column, Entity, Index } from "typeorm";

@Index("index_actorid", ["actorid"], {})
@Entity("combatrecord", { schema: "actor_c1001" })
export class Combatrecord {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "玩家id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "tagetId",
    nullable: true,
    comment: "对方的id",
    unsigned: true,
    default: () => "'0'",
  })
  tagetId: number | null;

  @Column("varchar", {
    name: "tagetname",
    nullable: true,
    comment: "对方的姓名",
    length: 32,
  })
  tagetname: string | null;

  @Column("int", {
    name: "nvictory",
    nullable: true,
    comment: "胜负关系",
    default: () => "'0'",
  })
  nvictory: number | null;

  @Column("int", {
    name: "ntime",
    nullable: true,
    comment: "挑战的时间",
    default: () => "'0'",
  })
  ntime: number | null;

  @Column("int", {
    name: "nranking",
    nullable: true,
    comment: "挑战后的排名",
    default: () => "'0'",
  })
  nranking: number | null;

  @Column("int", {
    name: "nawardtype1",
    nullable: true,
    comment: "奖励的参数类型1",
    default: () => "'0'",
  })
  nawardtype1: number | null;

  @Column("int", {
    name: "nawardtype2",
    nullable: true,
    comment: "奖励的参数类型2",
    default: () => "'0'",
  })
  nawardtype2: number | null;

  @Column("int", {
    name: "nawardtype3",
    nullable: true,
    comment: "奖励的参数类型3",
    default: () => "'0'",
  })
  nawardtype3: number | null;

  @Column("int", {
    name: "nawardvalue1",
    nullable: true,
    comment: "奖励的值1",
    default: () => "'0'",
  })
  nawardvalue1: number | null;

  @Column("int", {
    name: "nawardvalue2",
    nullable: true,
    comment: "奖励的值2",
    default: () => "'0'",
  })
  nawardvalue2: number | null;

  @Column("int", {
    name: "nawardvalue3",
    nullable: true,
    comment: "奖励的值3",
    default: () => "'0'",
  })
  nawardvalue3: number | null;

  @Column("int", {
    name: "reserver",
    nullable: true,
    comment: "预留",
    default: () => "'0'",
  })
  reserver: number | null;
}
