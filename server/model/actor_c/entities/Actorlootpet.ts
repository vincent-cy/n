import { Column, Entity } from "typeorm";

@Entity("actorlootpet", { schema: "actor_c1001" })
export class Actorlootpet {
  @Column("int", {
    primary: true,
    name: "actorid",
    comment: "玩家id",
    default: () => "'0'",
  })
  actorid: number;

  @Column("int", {
    primary: true,
    name: "type",
    comment: "类型",
    default: () => "'0'",
  })
  type: number;

  @Column("int", { name: "id", comment: "id", default: () => "'0'" })
  id: number;

  @Column("int", { name: "continueTime", comment: "时间" })
  continueTime: number;
}
