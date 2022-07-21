import { Column, Entity, Index } from "typeorm";

@Index("AK_key_actorid", ["actorid"], {})
@Index("index_actorid", ["actorid"], {})
@Entity("gamesetdata", { schema: "actor_c1001" })
export class Gamesetdata {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "玩家id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "gamedata1",
    nullable: true,
    comment: "游戏设置值",
    default: () => "'0'",
  })
  gamedata1: number | null;

  @Column("int", { name: "gamedata2", nullable: true, default: () => "'0'" })
  gamedata2: number | null;

  @Column("int", { name: "gamedata3", nullable: true, default: () => "'0'" })
  gamedata3: number | null;

  @Column("int", { name: "gamedata4", nullable: true, default: () => "'0'" })
  gamedata4: number | null;

  @Column("int", { name: "gamedata5", nullable: true, default: () => "'0'" })
  gamedata5: number | null;

  @Column("int", { name: "gamedata6", nullable: true, default: () => "'0'" })
  gamedata6: number | null;

  @Column("int", { name: "gamedata7", nullable: true, default: () => "'0'" })
  gamedata7: number | null;

  @Column("int", { name: "gamedata8", nullable: true, default: () => "'0'" })
  gamedata8: number | null;

  @Column("int", { name: "gamedata9", nullable: true, default: () => "'0'" })
  gamedata9: number | null;

  @Column("int", { name: "gamedata10", nullable: true, default: () => "'0'" })
  gamedata10: number | null;

  @Column("int", { name: "gamedata11", nullable: true, default: () => "'0'" })
  gamedata11: number | null;

  @Column("int", { name: "gamedata12", nullable: true, default: () => "'0'" })
  gamedata12: number | null;

  @Column("int", { name: "gamedata13", nullable: true, default: () => "'0'" })
  gamedata13: number | null;

  @Column("int", { name: "gamedata14", nullable: true, default: () => "'0'" })
  gamedata14: number | null;

  @Column("int", { name: "gamedata15", nullable: true, default: () => "'0'" })
  gamedata15: number | null;

  @Column("int", { name: "gamedata16", nullable: true, default: () => "'0'" })
  gamedata16: number | null;
}
