import { Column, Entity } from "typeorm";

@Entity("guildevent", { schema: "actor_c1001" })
export class Guildevent {
  @Column("int", {
    name: "guildid",
    nullable: true,
    comment: "帮派id",
    unsigned: true,
    default: () => "'0'",
  })
  guildid: number | null;

  @Column("int", {
    name: "ntime",
    nullable: true,
    comment: "发生的时间",
    default: () => "'0'",
  })
  ntime: number | null;

  @Column("int", {
    name: "eventid",
    nullable: true,
    comment: "事件id",
    default: () => "'0'",
  })
  eventid: number | null;

  @Column("int", {
    name: "nparam1",
    nullable: true,
    comment: "参数1",
    default: () => "'0'",
  })
  nparam1: number | null;

  @Column("int", {
    name: "nparam2",
    nullable: true,
    comment: "参数2",
    default: () => "'0'",
  })
  nparam2: number | null;

  @Column("int", {
    name: "nparam3",
    nullable: true,
    comment: "参数3",
    default: () => "'0'",
  })
  nparam3: number | null;

  @Column("varchar", {
    name: "nparam4",
    nullable: true,
    comment: "参数4",
    length: 32,
  })
  nparam4: string | null;

  @Column("varchar", {
    name: "nparam5",
    nullable: true,
    comment: "参数5",
    length: 32,
  })
  nparam5: string | null;

  @Column("int", {
    name: "reserver",
    nullable: true,
    comment: "保留",
    default: () => "'0'",
  })
  reserver: number | null;

  @Column("varchar", { name: "neventmsg", nullable: true, length: 512 })
  neventmsg: string | null;
}
