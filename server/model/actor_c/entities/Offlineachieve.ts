import { Column, Entity } from "typeorm";

@Entity("offlineachieve", { schema: "actor_c1001" })
export class Offlineachieve {
  @Column("int", { name: "actorid", comment: "玩家id", default: () => "'0'" })
  actorid: number;

  @Column("int", { name: "type", comment: "成就主类型" })
  type: number;

  @Column("int", {
    name: "subtype",
    comment: "成就父类型",
    default: () => "'0'",
  })
  subtype: number;

  @Column("int", { name: "value", comment: "进度", default: () => "'0'" })
  value: number;

  @Column("int", { name: "way", comment: "方式", default: () => "'0'" })
  way: number;
}
