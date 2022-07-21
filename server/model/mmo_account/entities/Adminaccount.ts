import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("adminaccount", { schema: "mmo_account" })
export class Adminaccount {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "accounttype",
    nullable: true,
    comment: "类型，0表示是帐号，1表示ip",
  })
  accounttype: number | null;

  @Column("varchar", {
    name: "rectdata",
    nullable: true,
    comment: "ip或者帐号",
    length: 124,
  })
  rectdata: string | null;
}
