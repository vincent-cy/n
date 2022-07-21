import { Column, Entity } from "typeorm";

@Entity("vaserieslog", { schema: "mmo_account" })
export class Vaserieslog {
  @Column("bigint", {
    primary: true,
    name: "sn",
    comment: "增值序列号",
    unsigned: true,
  })
  sn: string;

  @Column("int", { name: "tp", nullable: true, comment: "序列号分类" })
  tp: number | null;

  @Column("int", { name: "val", nullable: true, comment: "序列号子类" })
  val: number | null;

  @Column("datetime", { name: "gt", nullable: true, comment: "序列号生成时间" })
  gt: Date | null;

  @Column("datetime", { name: "ut", nullable: true, comment: "序列号使用时间" })
  ut: Date | null;

  @Column("int", {
    name: "uid",
    nullable: true,
    comment: "使用序列号的账号ID",
    unsigned: true,
  })
  uid: number | null;

  @Column("int", {
    name: "cid",
    nullable: true,
    comment: "使用此序列号的角色ID",
    unsigned: true,
  })
  cid: number | null;

  @Column("varchar", {
    name: "username",
    nullable: true,
    comment: "使用此序列号的角色名称",
    length: 64,
  })
  username: string | null;
}
