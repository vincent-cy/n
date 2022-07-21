import { Column, Entity } from "typeorm";

@Entity("csrank", { schema: "mmo_account" })
export class Csrank {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "角色ID",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("varchar", {
    name: "actorname",
    nullable: true,
    comment: "玩家角色",
    length: 32,
  })
  actorname: string | null;

  @Column("int", {
    name: "sex",
    nullable: true,
    comment: "性别",
    default: () => "'0'",
  })
  sex: number | null;

  @Column("int", {
    name: "job",
    nullable: true,
    comment: "职业",
    default: () => "'0'",
  })
  job: number | null;

  @Column("int", {
    name: "serverindex",
    nullable: true,
    comment: "玩家所在的服务器的编号",
    default: () => "'0'",
  })
  serverindex: number | null;

  @Column("int", {
    name: "value",
    nullable: true,
    comment: "排行指定值",
    default: () => "'0'",
  })
  value: number | null;
}
