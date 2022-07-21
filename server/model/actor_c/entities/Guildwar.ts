import { Column, Entity } from "typeorm";

@Entity("guildwar", { schema: "actor_c1001" })
export class Guildwar {
  @Column("int", {
    name: "guildid",
    nullable: true,
    comment: "帮派id",
    unsigned: true,
  })
  guildid: number | null;

  @Column("int", {
    name: "relationship",
    nullable: true,
    comment: "目前两帮派的关系",
  })
  relationship: number | null;

  @Column("int", {
    name: "state",
    nullable: true,
    comment: "双方的状态",
    default: () => "'0'",
  })
  state: number | null;

  @Column("int", {
    name: "warguildId",
    nullable: true,
    comment: "对方帮派的id",
    unsigned: true,
  })
  warguildId: number | null;

  @Column("int", {
    name: "pkcount",
    nullable: true,
    comment: "杀敌数目",
    default: () => "'0'",
  })
  pkcount: number | null;

  @Column("int", {
    name: "diecount",
    nullable: true,
    comment: "己方死亡数量",
    default: () => "'0'",
  })
  diecount: number | null;

  @Column("int", {
    name: "nexttime",
    nullable: true,
    comment: "改变状态的时间",
    unsigned: true,
    default: () => "'0'",
  })
  nexttime: number | null;
}
