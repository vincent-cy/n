import { Column, Entity, Index } from "typeorm";

@Index("consignincome_id", ["actorid"], { unique: true })
@Entity("consignmentincome", { schema: "actor_c1001" })
export class Consignmentincome {
  @Column("int", {
    name: "actorid",
    nullable: true,
    unique: true,
    comment: "玩家id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "income",
    nullable: true,
    comment: "寄卖收益",
    unsigned: true,
    default: () => "'0'",
  })
  income: number | null;

  @Column("int", {
    name: "serverindex",
    nullable: true,
    comment: "服务器id",
    default: () => "'0'",
  })
  serverindex: number | null;
}
