import { Column, Entity, Index } from "typeorm";

@Index("index_id", ["id"], {})
@Entity("actorstaticcount", { schema: "actor_c1001" })
export class Actorstaticcount {
  @Column("int", {
    primary: true,
    name: "id",
    comment: "玩家id",
    default: () => "'0'",
  })
  id: number;

  @Column("int", {
    primary: true,
    name: "nstatictype",
    comment: "计数器id",
    default: () => "'0'",
  })
  nstatictype: number;

  @Column("bigint", { name: "nvalue", comment: "值", default: () => "'0'" })
  nvalue: string;
}
