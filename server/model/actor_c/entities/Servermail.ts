import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_actorid", ["actorid"], {})
@Entity("servermail", { schema: "actor_c1001" })
export class Servermail {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "servermailid",
    comment: "全服邮件id",
  })
  servermailid: number;

  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "角色id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "邮件标题",
    length: 200,
  })
  title: string | null;

  @Column("varchar", {
    name: "content",
    nullable: true,
    comment: "邮件内容",
    length: 600,
  })
  content: string | null;

  @Column("int", {
    name: "minviplevel",
    nullable: true,
    comment: "最低vip等级",
    default: () => "'0'",
  })
  minviplevel: number | null;

  @Column("int", {
    name: "maxviplevel",
    nullable: true,
    comment: "最高vip等级",
    default: () => "'0'",
  })
  maxviplevel: number | null;

  @Column("int", {
    name: "minlevel",
    nullable: true,
    comment: "最低人物等级",
    default: () => "'0'",
  })
  minlevel: number | null;

  @Column("int", {
    name: "maxlevel",
    nullable: true,
    comment: "最高人物等级",
    default: () => "'0'",
  })
  maxlevel: number | null;

  @Column("int", {
    name: "minregistertime",
    nullable: true,
    comment: "最早注册时间",
    unsigned: true,
    default: () => "'0'",
  })
  minregistertime: number | null;

  @Column("int", {
    name: "maxregistertime",
    nullable: true,
    comment: "最晚注册时间",
    unsigned: true,
    default: () => "'0'",
  })
  maxregistertime: number | null;

  @Column("int", {
    name: "minlogintime",
    nullable: true,
    comment: "最早登录时间",
    unsigned: true,
    default: () => "'0'",
  })
  minlogintime: number | null;

  @Column("int", {
    name: "maxlogintime",
    nullable: true,
    comment: "最晚登录时间",
    unsigned: true,
    default: () => "'0'",
  })
  maxlogintime: number | null;

  @Column("int", {
    name: "online",
    nullable: true,
    comment: "是否在线",
    default: () => "'0'",
  })
  online: number | null;

  @Column("int", {
    name: "sex",
    nullable: true,
    comment: "性别",
    default: () => "'0'",
  })
  sex: number | null;

  @Column("int", {
    name: "complete",
    nullable: true,
    comment: "是否完成",
    default: () => "'0'",
  })
  complete: number | null;

  @Column("int", {
    name: "way",
    nullable: true,
    comment: "邮件用途\n",
    default: () => "'0'",
  })
  way: number | null;
}
