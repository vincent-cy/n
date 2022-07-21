import { Column, Entity, Index } from "typeorm";

@Index("index_corpsid", ["id"], {})
@Entity("brothgrouplist", { schema: "actor_c1001" })
export class Brothgrouplist {
  @Column("bigint", { name: "id", comment: "战队id", default: () => "'0'" })
  id: string;

  @Column("varchar", {
    name: "gname",
    nullable: true,
    comment: "战队名称",
    length: 32,
  })
  gname: string | null;

  @Column("int", {
    name: "serverindex",
    nullable: true,
    comment: "逻辑服的索引号",
    default: () => "'0'",
  })
  serverindex: number | null;

  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "队长id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", {
    name: "score",
    nullable: true,
    comment: "战队积分",
    default: () => "'0'",
  })
  score: number | null;

  @Column("int", {
    name: "reser",
    nullable: true,
    comment: "保留字段",
    default: () => "'0'",
  })
  reser: number | null;
}
