import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("serverroute", { schema: "mmo_account" })
export class Serverroute {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "主键" })
  id: number;

  @Column("int", { name: "serverid", nullable: true, comment: "服务器id" })
  serverid: number | null;

  @Column("varchar", {
    name: "hostname",
    nullable: true,
    comment: "网关的ip或者名字",
    length: 124,
  })
  hostname: string | null;

  @Column("int", { name: "port", nullable: true, comment: "网关的端口" })
  port: number | null;

  @Column("int", {
    name: "cserverid",
    nullable: true,
    comment: "连接的公共服务器Id",
    default: () => "'0'",
  })
  cserverid: number | null;

  @Column("varchar", {
    name: "servername",
    nullable: true,
    comment: "服务器名称",
    length: 32,
  })
  servername: string | null;
}
