import { Column, Entity } from "typeorm";

@Entity("gameserveraddress", { schema: "actor_c1001" })
export class Gameserveraddress {
  @Column("int", { name: "serverindex", nullable: true })
  serverindex: number | null;

  @Column("char", { name: "serveraddress", nullable: true, length: 128 })
  serveraddress: string | null;

  @Column("int", { name: "serverport", nullable: true })
  serverport: number | null;
}
