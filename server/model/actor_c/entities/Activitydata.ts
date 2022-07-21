import { Column, Entity } from "typeorm";

@Entity("activitydata", { schema: "actor_c1001" })
export class Activitydata {
  @Column("int", { name: "nId" })
  nId: number;

  @Column("int", { name: "nActivityType" })
  nActivityType: number;

  @Column("int", { name: "nTimeType" })
  nTimeType: number;

  @Column("int", { name: "nStartTime" })
  nStartTime: number;

  @Column("int", { name: "nEndTime" })
  nEndTime: number;
}
