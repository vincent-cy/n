import { Column, Entity } from "typeorm";

@Entity("filternames", { schema: "actor_c1001" })
export class Filternames {
  @Column("varchar", {
    primary: true,
    name: "namestr",
    comment: "屏蔽词",
    length: 64,
  })
  namestr: string;
}
