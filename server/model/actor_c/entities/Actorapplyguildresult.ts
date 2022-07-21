import { Column, Entity } from "typeorm";

@Entity("actorapplyguildresult", { schema: "actor_c1001" })
export class Actorapplyguildresult {
  @Column("int", {
    primary: true,
    name: "actorid",
    comment: "玩家id",
    default: () => "'0'",
  })
  actorid: number;

  @Column("int", { name: "guildid", comment: "工会id", default: () => "'0'" })
  guildid: number;
}
