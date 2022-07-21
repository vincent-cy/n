import { Column, Entity, Index } from "typeorm";

@Index("Index_actor", ["actorid"], {})
@Entity("actorfriends", { schema: "actor_c1001" })
export class Actorfriends {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "角色id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "rstype",
    nullable: true,
    comment: "关系类型，如0表示伴侣，1表示师父",
  })
  rstype: number | null;

  @Column("int", {
    name: "friendid",
    nullable: true,
    comment: "对方的id，如关系是师徒，则这个是师傅的角色id\r\n            ",
    unsigned: true,
  })
  friendid: number | null;

  @Column("varchar", {
    name: "friendname",
    nullable: true,
    comment: "角色名，对应Friendid字段",
    length: 32,
  })
  friendname: string | null;

  @Column("int", {
    name: "param",
    nullable: true,
    comment: "用于操作的参数值",
    unsigned: true,
    default: () => "'0'",
  })
  param: number | null;
}
