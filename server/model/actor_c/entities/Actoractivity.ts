import { Column, Entity, Index } from "typeorm";

@Index("Index_1", ["actorid"], {})
@Entity("actoractivity", { schema: "actor_c1001" })
export class Actoractivity {
  @Column("bigint", { primary: true, name: "actorid" })
  actorid: string;

  @Column("int", { primary: true, name: "nId" })
  nId: number;

  @Column("int", { name: "nActivityType" })
  nActivityType: number;

  @Column("int", { name: "nExpiredTime" })
  nExpiredTime: number;
}
