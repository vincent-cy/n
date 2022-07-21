import { Column, Entity } from "typeorm";

@Entity("guildskill", { schema: "actor_c1001" })
export class Guildskill {
  @Column("int", {
    name: "guildid",
    comment: "帮派id",
    unsigned: true,
    default: () => "'0'",
  })
  guildid: number;

  @Column("int", { name: "skillid", comment: "帮派技能", default: () => "'0'" })
  skillid: number;

  @Column("int", {
    name: "skilllevel",
    nullable: true,
    comment: "帮派技能等级",
    default: () => "'0'",
  })
  skilllevel: number | null;

  @Column("int", {
    name: "reserver",
    nullable: true,
    comment: "保留",
    default: () => "'0'",
  })
  reserver: number | null;
}
