import { Column, Entity, Index } from "typeorm";

@Index("index_actorid", ["nactorid"], {})
@Entity("periodride", { schema: "actor_c1001" })
export class Periodride {
  @Column("int", {
    name: "nactorid",
    nullable: true,
    comment: "玩家id",
    unsigned: true,
    default: () => "'0'",
  })
  nactorid: number | null;

  @Column("int", {
    name: "nrideid",
    nullable: true,
    comment: "坐骑id",
    default: () => "'0'",
  })
  nrideid: number | null;

  @Column("int", {
    name: "ntime",
    nullable: true,
    comment: "到期时间",
    default: () => "'0'",
  })
  ntime: number | null;

  @Column("int", {
    name: "reserver",
    nullable: true,
    comment: "预留",
    default: () => "'0'",
  })
  reserver: number | null;
}
