import { Column, Entity, Index } from "typeorm";

@Index("skill_id", ["actorid"], {})
@Entity("skill", { schema: "actor_c1001" })
export class Skill {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "玩家的ID",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "skillidlvmj",
    nullable: true,
    comment: "技能ID,等级，秘籍",
    unsigned: true,
    default: () => "'0'",
  })
  skillidlvmj: number | null;

  @Column("int", {
    name: "cdtime",
    nullable: true,
    comment: "CD时间",
    default: () => "'0'",
  })
  cdtime: number | null;

  @Column("int", {
    name: "reserve",
    nullable: true,
    comment: "保留",
    default: () => "'0'",
  })
  reserve: number | null;

  @Column("int", {
    name: "mjexpiretime",
    nullable: true,
    comment: "秘籍的过期时间",
    unsigned: true,
    default: () => "'0'",
  })
  mjexpiretime: number | null;

  @Column("int", {
    name: "miji",
    nullable: true,
    comment: "秘籍的ID",
    default: () => "'0'",
  })
  miji: number | null;
}
