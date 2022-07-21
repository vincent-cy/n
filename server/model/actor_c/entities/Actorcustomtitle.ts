import { Column, Entity, Index } from "typeorm";

@Index("Index_actorid", ["actorid"], {})
@Entity("actorcustomtitle", { schema: "actor_c1001" })
export class Actorcustomtitle {
  @Column("int", {
    name: "actorid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "idmakelong",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  idmakelong: number | null;

  @Column("int", {
    name: "remaintime",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  remaintime: number | null;
}
