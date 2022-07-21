import { Column, Entity } from "typeorm";

@Entity("actorofflinedata", { schema: "actor_c1001" })
export class Actorofflinedata {
  @Column("bigint", {
    primary: true,
    name: "actorid",
    comment: "玩家的actorid",
    unsigned: true,
  })
  actorid: string;

  @Column("varbinary", {
    name: "actorproperty",
    nullable: true,
    comment: "离线数据，玩家属性集",
    length: 1024,
  })
  actorproperty: Buffer | null;
}
