import { Column, Entity, Index } from "typeorm";

@Index("actor_id", ["actorid"], {})
@Entity("actorrelation", { schema: "actor_c1001" })
export class Actorrelation {
  @Column("int", {
    name: "actorid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", { name: "relationtype", nullable: true, default: () => "'0'" })
  relationtype: number | null;

  @Column("int", { name: "relationid", nullable: true, default: () => "'0'" })
  relationid: number | null;

  @Column("int", { name: "param", nullable: true, default: () => "'0'" })
  param: number | null;
}
