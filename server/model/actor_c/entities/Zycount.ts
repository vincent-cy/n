import { Column, Entity } from "typeorm";

@Entity("zycount", { schema: "actor_c1001" })
export class Zycount {
  @Column("int", {
    name: "zy",
    nullable: true,
    comment: "阵营id",
    default: () => "'0'",
  })
  zy: number | null;

  @Column("int", {
    name: "usercount",
    nullable: true,
    comment: "对应阵营的用户数，表示多少人选择了这个阵营",
    default: () => "'1'",
  })
  usercount: number | null;

  @Column("int", {
    name: "serverindex",
    nullable: true,
    comment: "服务器的id",
    default: () => "'0'",
  })
  serverindex: number | null;
}
