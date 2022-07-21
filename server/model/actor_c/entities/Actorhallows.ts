import { Column, Entity, Index } from "typeorm";

@Index("bagitem_id", ["actorid"], {})
@Entity("actorhallows", { schema: "actor_c1001" })
export class Actorhallows {
  @Column("int", {
    primary: true,
    name: "actorid",
    comment: "角色ID",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number;

  @Column("int", {
    name: "HallowsStar1",
    nullable: true,
    comment: "圣物兵魂升星1",
    default: () => "'0'",
  })
  hallowsStar1: number | null;

  @Column("int", {
    name: "HallowsStar2",
    nullable: true,
    comment: "圣物兵魂升星2",
    default: () => "'0'",
  })
  hallowsStar2: number | null;

  @Column("int", {
    name: "HallowsStar3",
    nullable: true,
    comment: "圣物兵魂升星3",
    default: () => "'0'",
  })
  hallowsStar3: number | null;

  @Column("int", {
    name: "HallowsStar4",
    nullable: true,
    comment: "圣物兵魂升星3",
    default: () => "'0'",
  })
  hallowsStar4: number | null;

  @Column("int", {
    name: "HallowsLorder1",
    nullable: true,
    comment: "圣物兵魂升阶1",
    default: () => "'0'",
  })
  hallowsLorder1: number | null;

  @Column("int", {
    name: "HallowsLorder2",
    nullable: true,
    comment: "圣物兵魂升阶2",
    default: () => "'0'",
  })
  hallowsLorder2: number | null;

  @Column("int", {
    name: "HallowsLorder3",
    nullable: true,
    comment: "圣物兵魂升阶3",
    default: () => "'0'",
  })
  hallowsLorder3: number | null;

  @Column("int", {
    name: "HallowsLorder4",
    nullable: true,
    comment: "圣物兵魂升阶4",
    default: () => "'0'",
  })
  hallowsLorder4: number | null;

  @Column("int", {
    name: "HallowsLv1",
    nullable: true,
    comment: "圣物兵魂升级1",
    default: () => "'0'",
  })
  hallowsLv1: number | null;

  @Column("int", {
    name: "HallowsLv2",
    nullable: true,
    comment: "圣物兵魂升级2",
    default: () => "'0'",
  })
  hallowsLv2: number | null;

  @Column("int", {
    name: "HallowsLv3",
    nullable: true,
    comment: "圣物兵魂升级3",
    default: () => "'0'",
  })
  hallowsLv3: number | null;

  @Column("int", {
    name: "HallowsLv4",
    nullable: true,
    comment: "圣物兵魂升级4",
    default: () => "'0'",
  })
  hallowsLv4: number | null;

  @Column("varchar", {
    name: "bestAttr1",
    comment: "圣物极品属性1",
    length: 50,
  })
  bestAttr1: string;

  @Column("varchar", {
    name: "bestAttr2",
    comment: "圣物极品属性2",
    length: 50,
  })
  bestAttr2: string;

  @Column("varchar", {
    name: "bestAttr3",
    comment: "圣物极品属性3",
    length: 50,
  })
  bestAttr3: string;

  @Column("varchar", {
    name: "bestAttr4",
    comment: "圣物极品属性4",
    length: 50,
  })
  bestAttr4: string;

  @Column("varchar", {
    name: "refining1",
    comment: "圣物洗炼属性1",
    length: 50,
  })
  refining1: string;

  @Column("varchar", {
    name: "refining2",
    comment: "圣物洗炼属性2",
    length: 50,
  })
  refining2: string;

  @Column("varchar", {
    name: "refining3",
    comment: "圣物洗炼属性3",
    length: 50,
  })
  refining3: string;

  @Column("varchar", {
    name: "refining4",
    comment: "圣物洗炼属性4",
    length: 50,
  })
  refining4: string;
}
