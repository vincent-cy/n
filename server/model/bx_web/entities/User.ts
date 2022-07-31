import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "bx_web" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", nullable: false, length: 32 })
  username: string | null;

  @Column("varchar", { name: "password", nullable: false, length: 32 })
  password: string | null;

  @Column("varchar", { name: "role", nullable: true, length: 32 })
  role: string | null;

  @Column("varchar", { name: "reg_ip", nullable: true, length: 15 })
  regIp: string | null;

  @Column("datetime", { name: "reg_time", nullable: true })
  regTime: Date | null;
}
