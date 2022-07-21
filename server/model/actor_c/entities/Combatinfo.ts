import { Column, Entity } from "typeorm";

@Entity("combatinfo", { schema: "actor_c1001" })
export class Combatinfo {
  @Column("int", {
    primary: true,
    name: "actorid",
    comment: "角色id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number;

  @Column("int", { name: "currank", comment: "当前排名", default: () => "'0'" })
  currank: number;

  @Column("int", { name: "maxrank", comment: "最高排名", default: () => "'0'" })
  maxrank: number;

  @Column("int", {
    name: "lastrank",
    comment: "上次排名",
    default: () => "'0'",
  })
  lastrank: number;

  @Column("int", {
    name: "combatscore",
    comment: "战力积分",
    default: () => "'0'",
  })
  combatscore: number;

  @Column("int", {
    name: "challegenum",
    comment: "挑战次数",
    default: () => "'0'",
  })
  challegenum: number;

  @Column("int", { name: "picknum", comment: "筛选次数", default: () => "'0'" })
  picknum: number;

  @Column("int", {
    name: "cleartime",
    comment: "清零时间",
    default: () => "'0'",
  })
  cleartime: number;

  @Column("int", { name: "cdflag", comment: "cd标志", default: () => "'0'" })
  cdflag: number;
}
