import { Column, Entity } from "typeorm";

@Entity("actorCustomProperty", { schema: "actor_c1001" })
export class ActorCustomProperty {
  @Column("bigint", {
    primary: true,
    name: "actorid",
    comment: "玩家的actorid",
    unsigned: true,
  })
  actorid: string;

  @Column("varchar", {
    name: "actorproperty",
    nullable: true,
    comment: "玩家自定义属性集",
    length: 4096,
  })
  actorproperty: string | null;
}
