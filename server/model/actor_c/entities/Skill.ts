import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * skill
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Skill
 */
@Entity({
    name: 'skill'
})
export class Skill {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Skill
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家的ID
     *
     * @type { number }
     * @memberof Skill
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 技能ID,等级，秘籍
     *
     * @type { number }
     * @memberof Skill
     */
    @Column({ name: 'skillidlvmj' })
    skillidlvmj: number;
    /**
     * CD时间
     *
     * @type { number }
     * @memberof Skill
     */
    @Column({ name: 'cdtime' })
    cdtime: number;
    /**
     * 保留
     *
     * @type { number }
     * @memberof Skill
     */
    @Column({ name: 'reserve' })
    reserve: number;
    /**
     * 秘籍的过期时间
     *
     * @type { number }
     * @memberof Skill
     */
    @Column({ name: 'mjexpiretime' })
    mjexpiretime: number;
    /**
     * 秘籍的ID
     *
     * @type { number }
     * @memberof Skill
     */
    @Column({ name: 'miji' })
    miji: number;
}