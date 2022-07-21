import { Column, Entity, Index } from "typeorm";

@Index("Index_actorid", ["actorid"], {})
@Entity("actorreviveduration", { schema: "actor_c1001" })
export class Actorreviveduration {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "角色ID",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "idmakelong",
    nullable: true,
    comment: "复活特权ID",
    unsigned: true,
    default: () => "'0'",
  })
  idmakelong: number | null;

  @Column("int", {
    name: "remaintime",
    nullable: true,
    comment: "持续时间",
    unsigned: true,
    default: () => "'0'",
  })
  remaintime: number | null;
}
