import { Column, Entity, Index } from "typeorm";

@Index("AK_Key_1", ["actorid"], {})
@Entity("goingquest", { schema: "actor_c1001" })
export class Goingquest {
  @Column("int", {
    name: "actorid",
    nullable: true,
    comment: "角色id",
    unsigned: true,
  })
  actorid: number | null;

  @Column("int", {
    name: "idtask",
    comment: "任务id以及需求id",
    default: () => "'0'",
  })
  idtask: number;

  @Column("int", { name: "type", comment: "对应的type", default: () => "'0'" })
  type: number;

  @Column("int", { name: "value", comment: "任务进度值", default: () => "'0'" })
  value: number;

  @Column("int", { name: "state", comment: "任务状态", default: () => "'0'" })
  state: number;

  @Column("int", {
    name: "complete",
    comment: "完成状态",
    default: () => "'0'",
  })
  complete: number;

  @Column("int", {
    name: "usefstimes",
    comment: "当前任务使用飞鞋次数",
    default: () => "'0'",
  })
  usefstimes: number;

  @Column("int", {
    name: "nStartId",
    comment: "用于环形任务id",
    default: () => "'0'",
  })
  nStartId: number;
}
