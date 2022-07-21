import { Column, Entity } from "typeorm";

@Entity("guildapplyresult", { schema: "actor_c1001" })
export class Guildapplyresult {
  @Column("int", {
    primary: true,
    name: "actorid",
    comment: "玩家id",
    default: () => "'0'",
  })
  actorid: number;

  @Column("int", {
    name: "applyresult",
    comment: "申请结果",
    default: () => "'0'",
  })
  applyresult: number;
}
