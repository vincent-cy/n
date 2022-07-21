import { Column, Entity, Index } from "typeorm";

@Index("combatlog_id", ["actorid"], {})
@Entity("combatlog", { schema: "actor_c1001" })
export class Combatlog {
  @Column("int", { name: "actorid", unsigned: true, default: () => "'0'" })
  actorid: number;

  @Column("int", { name: "type", default: () => "'0'" })
  type: number;

  @Column("int", { name: "result", default: () => "'0'" })
  result: number;

  @Column("int", { name: "targetid", default: () => "'0'" })
  targetid: number;

  @Column("varchar", { name: "targetname", length: 32, default: () => "'0'" })
  targetname: string;

  @Column("int", { name: "rank", default: () => "'0'" })
  rank: number;
}
