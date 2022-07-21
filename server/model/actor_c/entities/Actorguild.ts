import { Column, Entity, Index } from "typeorm";

@Index("actorguild_id", ["actorid"], {})
@Entity("actorguild", { schema: "actor_c1001" })
export class Actorguild {
  @Column("int", {
    primary: true,
    name: "actorid",
    comment: "角色id",
    unsigned: true,
    default: () => "'0'",
  })
  actorid: number;

  @Column("int", {
    name: "guildid",
    nullable: true,
    comment: "帮派的id",
    unsigned: true,
    default: () => "'0'",
  })
  guildid: number | null;

  @Column("int", {
    name: "typetk",
    nullable: true,
    comment: "帮派地位和堂口id，高16位是帮派地位值，低16位表示所属堂口",
    default: () => "'0'",
  })
  typetk: number | null;

  @Column("int", {
    name: "zjnext",
    nullable: true,
    comment: "下次可领取 召集令的 时间",
    unsigned: true,
    default: () => "'0'",
  })
  zjnext: number | null;

  @Column("int", {
    name: "zznext",
    nullable: true,
    comment: "下次可升职（降职）的 时间",
    unsigned: true,
    default: () => "'0'",
  })
  zznext: number | null;

  @Column("int", {
    name: "zscore",
    nullable: true,
    comment: "封号序号",
    default: () => "'0'",
  })
  zscore: number | null;

  @Column("int", {
    name: "zguildgx",
    nullable: true,
    comment: "帮派累计贡献",
    default: () => "'0'",
  })
  zguildgx: number | null;

  @Column("int", {
    name: "zpostype",
    nullable: true,
    comment: "沙巴克城的职位",
    default: () => "'0'",
  })
  zpostype: number | null;

  @Column("int", { name: "nmodel", nullable: true, default: () => "'0'" })
  nmodel: number | null;

  @Column("int", {
    name: "ztodaygx",
    nullable: true,
    comment: "今天所得贡献",
    default: () => "'0'",
  })
  ztodaygx: number | null;

  @Column("int", { name: "shangxtimes", nullable: true, default: () => "'0'" })
  shangxtimes: number | null;

  @Column("int", { name: "naddtimes", nullable: true, default: () => "'0'" })
  naddtimes: number | null;

  @Column("int", {
    name: "nexploretimes",
    nullable: true,
    default: () => "'0'",
  })
  nexploretimes: number | null;

  @Column("int", {
    name: "nexploreitemid",
    nullable: true,
    default: () => "'0'",
  })
  nexploreitemid: number | null;

  @Column("int", {
    name: "nchanllengetimes",
    nullable: true,
    default: () => "'0'",
  })
  nchanllengetimes: number | null;

  @Column("int", {
    name: "naddchanllengetimes",
    nullable: true,
    default: () => "'0'",
  })
  naddchanllengetimes: number | null;

  @Column("int", {
    name: "jointime",
    nullable: true,
    comment: "加入行会的时间",
    unsigned: true,
    default: () => "'0'",
  })
  jointime: number | null;
}
