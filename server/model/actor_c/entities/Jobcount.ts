import { Column, Entity } from "typeorm";

@Entity("jobcount", { schema: "actor_c1001" })
export class Jobcount {
  @Column("int", {
    name: "job",
    nullable: true,
    comment: "职业id",
    default: () => "'0'",
  })
  job: number | null;

  @Column("int", {
    name: "usercount",
    nullable: true,
    comment: "对应职业的用户数，表示多少人选择了这个职业",
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
