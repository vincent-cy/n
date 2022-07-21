import { Column, Entity, Index } from "typeorm";

@Index("index", ["actorid"], {})
@Entity("actorghost", { schema: "actor_c1001" })
export class Actorghost {
  @Column("int", {
    primary: true,
    name: "actorid",
    comment: "玩家id",
    default: () => "'0'",
  })
  actorid: number;

  @Column("int", {
    primary: true,
    name: "id",
    comment: "id",
    default: () => "'0'",
  })
  id: number;

  @Column("int", { name: "lv", comment: "等级" })
  lv: number;

  @Column("int", { name: "bless", comment: "祝福值", default: () => "'0'" })
  bless: number;
}
