import { Column, Entity, Index } from "typeorm";

@Index("Index_actorid", ["nactorid"], {})
@Entity("friendchatmsg", { schema: "actor_c1001" })
export class Friendchatmsg {
  @Column("int", {
    name: "nactorid",
    nullable: true,
    comment: "玩家id",
    unsigned: true,
    default: () => "'0'",
  })
  nactorid: number | null;

  @Column("int", {
    name: "tagetid",
    nullable: true,
    comment: "对方的id",
    unsigned: true,
    default: () => "'0'",
  })
  tagetid: number | null;

  @Column("int", {
    name: "ntime",
    nullable: true,
    comment: "发送消息的时间",
    default: () => "'0'",
  })
  ntime: number | null;

  @Column("varchar", {
    name: "chatmsg",
    nullable: true,
    comment: "聊天消息",
    length: 256,
  })
  chatmsg: string | null;

  @Column("int", {
    name: "reserver",
    nullable: true,
    comment: "预留",
    default: () => "'0'",
  })
  reserver: number | null;
}
