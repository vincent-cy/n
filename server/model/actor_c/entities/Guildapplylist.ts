import { Column, Entity, Index } from "typeorm";

@Index("guild_acrot_index", ["guildid", "actorid"], {})
@Index("guildapply_index", ["guildid"], {})
@Entity("guildapplylist", { schema: "actor_c1001" })
export class Guildapplylist {
  @Column("bigint", {
    primary: true,
    name: "guildid",
    comment: "行会id",
    default: () => "'0'",
  })
  guildid: string;

  @Column("int", {
    primary: true,
    name: "actorid",
    comment: "玩家id",
    default: () => "'0'",
  })
  actorid: number;

  @Column("int", { name: "applytime", comment: "申请的时间" })
  applytime: number;
}
