import { Column, Entity, Index } from "typeorm";

@Index("AK_Key_1", ["actorid"], {})
@Entity("repeatquest", { schema: "actor_c1001" })
export class Repeatquest {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "角色id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "idtime",
    nullable: true,
    comment: "低16任务id，高16完成次数",
    default: () => "'0'",
  })
  idtime: number | null;

  @Column("int", {
    name: "qtime",
    nullable: true,
    comment: "任务计次归零的时间",
    default: () => "'0'",
  })
  qtime: number | null;
}
