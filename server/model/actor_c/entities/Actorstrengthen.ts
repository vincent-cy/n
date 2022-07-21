import { Column, Entity, Index } from "typeorm";

@Index("index_id", ["actorid"], {})
@Entity("actorstrengthen", { schema: "actor_c1001" })
export class Actorstrengthen {
  @Column("int", { name: "actorid", comment: "玩家id", default: () => "'0'" })
  actorid: number;

  @Column("int", { name: "ntype", comment: "类型", default: () => "'0'" })
  ntype: number;

  @Column("int", { name: "npos", comment: "位置", default: () => "'0'" })
  npos: number;

  @Column("int", { name: "nlv", comment: "等级", default: () => "'0'" })
  nlv: number;
}
