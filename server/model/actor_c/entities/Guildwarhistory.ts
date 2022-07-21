import { Column, Entity } from "typeorm";

@Entity("guildwarhistory", { schema: "actor_c1001" })
export class Guildwarhistory {
  @Column("int", {
    name: "guildid",
    nullable: true,
    comment: "帮派id",
    unsigned: true,
  })
  guildid: number | null;

  @Column("int", {
    name: "warguildid",
    nullable: true,
    comment: "帮派战对方的帮派id",
  })
  warguildid: number | null;

  @Column("int", {
    name: "pkcount",
    nullable: true,
    comment: "杀敌数量",
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

  @Column("datetime", { name: "endtime", nullable: true, comment: "结束时间" })
  endtime: Date | null;
}
