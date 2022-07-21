import { Column, Entity } from "typeorm";

@Entity("actorbinarydata", { schema: "actor_c1001" })
export class Actorbinarydata {
  @Column("bigint", {
    primary: true,
    name: "actorid",
    comment: "玩家的actorid",
    unsigned: true,
  })
  actorid: string;

  @Column("varbinary", {
    name: "quest",
    nullable: true,
    comment: "任务数据",
    length: 256,
  })
  quest: Buffer | null;

  @Column("varbinary", {
    name: "achievefinishstate",
    nullable: true,
    comment: "成就完成和是否领取奖励的字段",
    length: 750,
  })
  achievefinishstate: Buffer | null;

  @Column("varbinary", {
    name: "achieveeventdata",
    nullable: true,
    comment: "成就事件的触发次数字段",
    length: 750,
  })
  achieveeventdata: Buffer | null;

  @Column("varbinary", {
    name: "titles",
    nullable: true,
    comment: "玩家的称号列表",
    length: 32,
  })
  titles: Buffer | null;
}
