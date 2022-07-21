import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Index_actorid", ["actorid"], {})
@Index("Index_mailid", ["mailid"], {})
@Entity("mail", { schema: "actor_c1001" })
export class Mail {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("bigint", { name: "mailid", nullable: true, default: () => "'0'" })
  mailid: string | null;

  @Column("int", {
    name: "actorid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "srcid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  srcid: number | null;

  @Column("varchar", { name: "title", nullable: true, length: 200 })
  title: string | null;

  @Column("varchar", { name: "content", nullable: true, length: 1000 })
  content: string | null;

  @Column("int", {
    name: "createdt",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  createdt: number | null;

  @Column("tinyint", { name: "state", nullable: true, default: () => "'0'" })
  state: number | null;

  @Column("int", {
    name: "isdel",
    nullable: true,
    comment: "是否已经删除了",
    default: () => "'0'",
  })
  isdel: number | null;
}
