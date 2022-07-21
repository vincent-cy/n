import { Column, Entity } from "typeorm";

@Entity("actorvariable", { schema: "actor_c1001" })
export class Actorvariable {
  @Column("bigint", { primary: true, name: "actorid", comment: "玩家的角色id" })
  actorid: string;

  @Column("mediumblob", { name: "variable", nullable: true })
  variable: Buffer | null;
}
