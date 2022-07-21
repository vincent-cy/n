import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("useramount", { schema: "mmo_account" })
export class Useramount {
  @PrimaryGeneratedColumn({ type: "int", name: "userid", unsigned: true })
  userid: number;

  @Column("int", {
    name: "amount",
    nullable: true,
    comment: "用户余额，单位是元宝",
    unsigned: true,
    default: () => "'0'",
  })
  amount: number | null;

  @Column("int", {
    name: "amountsum",
    nullable: true,
    comment: "用户总计充值元宝统计",
    unsigned: true,
    default: () => "'0'",
  })
  amountsum: number | null;

  @Column("int", {
    name: "paysum",
    nullable: true,
    comment: "用户总计充值次数，每次充值都递增此值",
    unsigned: true,
    default: () => "'0'",
  })
  paysum: number | null;

  @Column("datetime", {
    name: "firstpaytime",
    nullable: true,
    comment: "用户首次充值时间",
  })
  firstpaytime: Date | null;

  @Column("int", {
    name: "firstpayamount",
    nullable: true,
    comment: "用户首次充值元宝数量",
    unsigned: true,
    default: () => "'0'",
  })
  firstpayamount: number | null;

  @Column("datetime", {
    name: "lastpaytime",
    nullable: true,
    comment: "用户最后一次充值时间",
  })
  lastpaytime: Date | null;

  @Column("int", {
    name: "lastpayamount",
    nullable: true,
    comment: "用户最后一次充值的元宝数量",
    unsigned: true,
    default: () => "'0'",
  })
  lastpayamount: number | null;
}
