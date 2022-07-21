import { Column, Entity, Index } from "typeorm";

@Index("Index_death", ["actorid"], {})
@Index("Index_kill", ["killerid"], {})
@Entity("actordeath", { schema: "actor_c1001" })
export class Actordeath {
  @Column("int", {
    name: "actorid",
    comment: "玩家ID",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number;

  @Column("int", {
    name: "killerid",
    comment: "击杀者ID",
    unsigned: true,
    default: () => "'0'",
  })
  killerid: number;

  @Column("int", {
    name: "deathtime",
    comment: "死亡时间",
    unsigned: true,
    default: () => "'0'",
  })
  deathtime: number;

  @Column("varchar", { name: "killername", comment: "击杀者Name", length: 32 })
  killername: string;

  @Column("int", {
    name: "killsceneid",
    comment: "击杀场景",
    default: () => "'0'",
  })
  killsceneid: number;

  @Column("int", {
    name: "killposx",
    nullable: true,
    comment: "击杀位置x",
    default: () => "'0'",
  })
  killposx: number | null;

  @Column("int", {
    name: "killposy",
    nullable: true,
    comment: "击杀位置y",
    default: () => "'0'",
  })
  killposy: number | null;

  @Column("int", { name: "type", comment: "类型", default: () => "'0'" })
  type: number;
}
