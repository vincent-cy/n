import { Column, Entity, Index } from "typeorm";

@Index("Index_logtime", ["logtime"], {})
@Entity("clickcreaterole", { schema: "actor_c1001" })
export class Clickcreaterole {
  @Column("varchar", {
    name: "accountname",
    nullable: true,
    comment: "用户账号",
    length: 32,
  })
  accountname: string | null;

  @Column("datetime", {
    name: "logtime",
    nullable: true,
    comment: "日志创建的时间",
  })
  logtime: Date | null;

  @Column("varchar", {
    name: "loginip",
    nullable: true,
    comment: "登录ip",
    length: 32,
  })
  loginip: string | null;

  @Column("int", {
    name: "serverindex",
    nullable: true,
    comment: "服务器id",
    default: () => "'0'",
  })
  serverindex: number | null;
}
