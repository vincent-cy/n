import { Column, Entity, Index } from "typeorm";

@Index("bossId_index", ["bossid"], {})
@Entity("bossmgr", { schema: "actor_c1001" })
export class Bossmgr {
  @Column("int", {
    primary: true,
    name: "bossid",
    comment: "bossid",
    default: () => "'0'",
  })
  bossid: number;

  @Column("int", {
    name: "referTime",
    comment: "刷新时间",
    default: () => "'0'",
  })
  referTime: number;

  @Column("int", {
    name: "leftCount",
    comment: "剩余个数",
    default: () => "'0'",
  })
  leftCount: number;

  @Column("int", { name: "bosslv", comment: "boss等级", default: () => "'0'" })
  bosslv: number;
}
