import { Column, Entity, Index } from "typeorm";

@Index("actorid_index", ["actorid"], {})
@Entity("actorachieve", { schema: "actor_c1001" })
export class Actorachieve {
  @Column("int", {
    primary: true,
    name: "actorid",
    comment: "玩家id",
    default: () => "'0'",
  })
  actorid: number;

  @Column("int", {
    primary: true,
    name: "achievetype",
    comment: "成就id  成就类型*1000+子成就类型",
    default: () => "'0'",
  })
  achievetype: number;

  @Column("bigint", { name: "nValue", default: () => "'0'" })
  nValue: string;
}
