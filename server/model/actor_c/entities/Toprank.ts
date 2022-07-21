import { Column, Entity, Index } from "typeorm";

@Index("Index_1", ["actorid"], {})
@Entity("toprank", { schema: "actor_c1001" })
export class Toprank {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "玩家的actorid",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "rankid",
    nullable: true,
    comment: "排名的id",
    default: () => "'0'",
  })
  rankid: number | null;

  @Column("int", {
    name: "rank",
    nullable: true,
    comment: "排行名次",
    unsigned: true,
    default: () => "'0'",
  })
  rank: number | null;

  @Column("int", {
    name: "serverindex",
    nullable: true,
    comment: "服务器编号",
    default: () => "'0'",
  })
  serverindex: number | null;

  @Column("bigint", {
    name: "val",
    nullable: true,
    comment: "记录排行key1的值 各个排行榜有不同的定义",
    default: () => "'0'",
  })
  val: string | null;

  @Column("bigint", {
    name: "val2",
    nullable: true,
    comment: "记录排行key2的值 各个排行榜有不同的定义",
    default: () => "'0'",
  })
  val2: string | null;

  @Column("varchar", {
    name: "desc1",
    nullable: true,
    comment: "描述字符串1",
    length: 2048,
  })
  desc1: string | null;

  @Column("varchar", {
    name: "desc2",
    nullable: true,
    comment: "描述字符串2",
    length: 2048,
  })
  desc2: string | null;
}
