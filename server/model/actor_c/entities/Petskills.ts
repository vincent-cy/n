import { Column, Entity, Index } from "typeorm";

@Index("Index_actorid", ["actorid"], {})
@Entity("petskills", { schema: "actor_c1001" })
export class Petskills {
  @Column("bigint", {
    name: "actorid",
    nullable: true,
    comment: "actorid",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: string | null;

  @Column("int", {
    name: "petid",
    nullable: true,
    comment: "宠物的Id",
    default: () => "'0'",
  })
  petid: number | null;

  @Column("int", {
    name: "skillid",
    nullable: true,
    comment: "技能的Id",
    default: () => "'0'",
  })
  skillid: number | null;

  @Column("int", {
    name: "skilllevel",
    nullable: true,
    comment: "技能的等级",
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

  @Column("int", {
    name: "skillexp",
    nullable: true,
    comment: "技能经验",
    default: () => "'0'",
  })
  skillexp: number | null;
}
