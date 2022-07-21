import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("feecallback", { schema: "actor_c1001" })
export class Feecallback {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "pfid", comment: "平台id", length: 32 })
  pfid: string;

  @Column("int", {
    name: "serverid",
    comment: "服务器id",
    default: () => "'0'",
  })
  serverid: number;

  @Column("int", { name: "actorid", comment: "角色id", default: () => "'0'" })
  actorid: number;

  @Column("varchar", { name: "account", comment: "账户名", length: 80 })
  account: string;

  @Column("varchar", {
    name: "prodid",
    comment: "商品id",
    length: 48,
    default: () => "'0'",
  })
  prodid: string;

  @Column("int", { name: "num" })
  num: number;

  @Column("varchar", { name: "token", comment: "验证", length: 64 })
  token: string;

  @Column("int", {
    name: "flag",
    nullable: true,
    comment: "检测标志, 0待通知，1通知中，2已通知，3充值中，4已充值",
    default: () => "'0'",
  })
  flag: number | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    comment: "记录时间",
  })
  createdAt: Date | null;

  @Column("float", {
    name: "amt",
    comment: "折扣后充值金额",
    precision: 12,
    default: () => "'0'",
  })
  amt: number;

  @Column("int", {
    name: "oldserverid",
    comment: "原服serverid",
    default: () => "'0'",
  })
  oldserverid: number;
}
