import { Column, Entity, Index } from "typeorm";

@Index("Index_accountid", ["accountid"], {})
@Entity("accountpsw", { schema: "actor_c1001" })
export class Accountpsw {
  @Column("int", {
    name: "accountid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  accountid: number | null;

  @Column("int", { name: "serverindex", nullable: true, default: () => "'0'" })
  serverindex: number | null;

  @Column("varchar", { name: "psw", nullable: true, length: 32 })
  psw: string | null;
}
