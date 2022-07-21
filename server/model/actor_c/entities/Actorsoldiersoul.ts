import { Column, Entity, Index } from "typeorm";

@Index("Index_actorid", ["actorid"], {})
@Entity("actorsoldiersoul", { schema: "actor_c1001" })
export class Actorsoldiersoul {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "玩家id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "soldiersoulindex",
    nullable: true,
    comment: "兵魂索引",
    default: () => "'0'",
  })
  soldiersoulindex: number | null;

  @Column("int", {
    name: "isAttach",
    nullable: true,
    comment: "是否附身",
    default: () => "'0'",
  })
  isAttach: number | null;

  @Column("int", {
    name: "skillLevel",
    nullable: true,
    comment: "兵魂技能等级",
    default: () => "'0'",
  })
  skillLevel: number | null;

  @Column("int", {
    name: "starProgress",
    nullable: true,
    comment: "兵魂星星进度",
    default: () => "'0'",
  })
  starProgress: number | null;
}
