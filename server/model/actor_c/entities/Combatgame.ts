import { Column, Entity, Index } from "typeorm";

@Index("index_actorid", ["actorid"], {})
@Entity("combatgame", { schema: "actor_c1001" })
export class Combatgame {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "玩家id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "winningtimes",
    nullable: true,
    comment: "连胜次数",
    default: () => "'0'",
  })
  winningtimes: number | null;

  @Column("int", {
    name: "chagangetimes",
    nullable: true,
    comment: "今日已挑战的次数",
    default: () => "'0'",
  })
  chagangetimes: number | null;

  @Column("int", {
    name: "nextchagangetime",
    nullable: true,
    comment: "下次可以挑战的时间",
    default: () => "'0'",
  })
  nextchagangetime: number | null;

  @Column("int", {
    name: "refreshtimes",
    nullable: true,
    comment: "今天银两刷新的次数",
    default: () => "'0'",
  })
  refreshtimes: number | null;

  @Column("int", {
    name: "awardrank",
    nullable: true,
    comment: "领取奖励的排名",
    default: () => "'0'",
  })
  awardrank: number | null;

  @Column("int", {
    name: "addchagneTimes",
    nullable: true,
    comment: "增加的挑战次数",
    default: () => "'0'",
  })
  addchagneTimes: number | null;

  @Column("int", {
    name: "bshowflag",
    nullable: true,
    comment: "是否显示提示",
    default: () => "'0'",
  })
  bshowflag: number | null;

  @Column("int", {
    name: "reserver",
    nullable: true,
    comment: "预留",
    default: () => "'0'",
  })
  reserver: number | null;
}
