import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("actormsg_id", ["actorid"], {})
@Entity("actormsg", { schema: "actor_c1001" })
export class Actormsg {
  @PrimaryGeneratedColumn({ type: "bigint", name: "msgid" })
  msgid: string;

  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "消息对应的角色id，表示这个消息要发送的对象",
    unsigned: true,
  })
  actorid: number | null;

  @Column("int", { name: "msgtype", nullable: true, comment: "消息的类型" })
  msgtype: number | null;

  @Column("varbinary", {
    name: "msg",
    nullable: true,
    comment: "消息的内容，二进制数据",
    length: 1024,
  })
  msg: Buffer | null;
}
