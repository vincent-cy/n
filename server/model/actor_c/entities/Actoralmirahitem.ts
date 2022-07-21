import { Column, Entity, Index } from "typeorm";

@Index("Index_actor", ["actorid"], {})
@Entity("actoralmirahitem", { schema: "actor_c1001" })
export class Actoralmirahitem {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "角色ID",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number | null;

  @Column("int", { name: "nId", nullable: true, comment: "衣橱类型" })
  nId: number | null;

  @Column("int", {
    name: "nlv",
    nullable: true,
    comment: "等级",
    unsigned: true,
  })
  nlv: number | null;

  @Column("int", { name: "ntakeon", nullable: true, comment: "是否穿在身上" })
  ntakeon: number | null;
}
