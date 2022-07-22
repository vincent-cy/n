import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * petskills
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Petskills
 */
@Entity({
    name: 'petskills'
})
export class Petskills {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Petskills
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * actorid
     *
     * @type { string }
     * @memberof Petskills
     */
    @Column({ name: 'actorid' })
    actorid: string;
    /**
     * 宠物的Id
     *
     * @type { number }
     * @memberof Petskills
     */
    @Column({ name: 'petid' })
    petid: number;
    /**
     * 技能的Id
     *
     * @type { number }
     * @memberof Petskills
     */
    @Column({ name: 'skillid' })
    skillid: number;
    /**
     * 技能的等级
     *
     * @type { number }
     * @memberof Petskills
     */
    @Column({ name: 'skilllevel' })
    skilllevel: number;
    /**
     * 保留
     *
     * @type { number }
     * @memberof Petskills
     */
    @Column({ name: 'reserver' })
    reserver: number;
    /**
     * 技能经验
     *
     * @type { number }
     * @memberof Petskills
     */
    @Column({ name: 'skillexp' })
    skillexp: number;
}