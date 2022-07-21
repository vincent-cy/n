import { Column, Entity } from "typeorm";

@Entity("vaseries", { schema: "mmo_account" })
export class Vaseries {
  @Column("bigint", {
    primary: true,
    name: "sn",
    comment: "唯一序列号",
    unsigned: true,
  })
  sn: string;

  @Column("int", {
    name: "tp",
    nullable: true,
    comment: "序列号分类",
    default: () => "'1'",
  })
  tp: number | null;

  @Column("int", {
    name: "val",
    nullable: true,
    comment: "序列号子类",
    default: () => "'1'",
  })
  val: number | null;

  @Column("datetime", { name: "gt", nullable: true, comment: "序列号生成时间" })
  gt: Date | null;
}
