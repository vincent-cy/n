import { Column, Entity, Index } from "typeorm";

@Index("Index_actor", ["actorid"], {})
@Index("Index_killer", ["killerid"], {})
@Entity("actordeathdrop", { schema: "actor_c1001" })
export class Actordeathdrop {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "玩家ID",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "killerid",
    nullable: true,
    comment: "凶手ID（0-怪,>0玩家）",
    unsigned: true,
    default: () => "'0'",
  })
  killerid: number | null;

  @Column("int", {
    name: "deathtime",
    nullable: true,
    comment: "死亡时间",
    unsigned: true,
    default: () => "'0'",
  })
  deathtime: number | null;

  @Column("int", {
    name: "dropid",
    nullable: true,
    comment: "掉落道具ID",
    default: () => "'0'",
  })
  dropid: number | null;

  @Column("int", {
    name: "dropcount",
    nullable: true,
    comment: "掉落道具数量",
    default: () => "'0'",
  })
  dropcount: number | null;
}
