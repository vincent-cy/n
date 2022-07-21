import { Column, Entity } from "typeorm";

@Entity("actorgameotherSets", { schema: "actor_c1001" })
export class ActorgameotherSets {
  @Column("int", { primary: true, name: "actorid", default: () => "'0'" })
  actorid: number;

  @Column("varchar", {
    name: "kb",
    nullable: true,
    comment: "快捷键",
    length: 500,
  })
  kb: string | null;

  @Column("mediumblob", { name: "setting", nullable: true })
  setting: Buffer | null;
}
