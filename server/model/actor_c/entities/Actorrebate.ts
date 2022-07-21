import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("actorrebate", { schema: "actor_c1001" })
export class Actorrebate {
  @PrimaryGeneratedColumn({ type: "int", name: "nIndex", comment: "索引" })
  nIndex: number;

  @Column("int", { name: "nActorId", comment: "玩家Id" })
  nActorId: number;

  @Column("int", { name: "nId", comment: "返利序号" })
  nId: number;

  @Column("int", { name: "nTimeType", comment: "时间类型" })
  nTimeType: number;

  @Column("int", { name: "nStartTime", comment: "开始时间" })
  nStartTime: number;

  @Column("int", { name: "nEndTime", comment: "结束时间" })
  nEndTime: number;

  @Column("int", { name: "nClearTime", comment: "从数据库中删除的时间" })
  nClearTime: number;

  @Column("int", { name: "nOfflineType", comment: "活动类型" })
  nOfflineType: number;

  @Column("int", { name: "nAtonce", comment: "立刻发放奖励" })
  nAtonce: number;

  @Column("int", { name: "nOverlay", comment: "是否可叠加" })
  nOverlay: number;

  @Column("int", { name: "nYBValue", comment: "累计充值元宝数" })
  nYbValue: number;

  @Column("int", { name: "nStatus", comment: "领取状态" })
  nStatus: number;
}
