import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * csrank
 * @Date 2022/7/22 15:16:22
 * @author vincent
 * @export
 * @class Csrank
 */
@Entity({
    name: 'csrank'
})
export class Csrank {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Csrank
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色ID
     *
     * @type { number }
     * @memberof Csrank
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 玩家角色
     *
     * @type { string }
     * @memberof Csrank
     */
    @Column({ name: 'actorname' })
    actorname: string;
    /**
     * 性别
     *
     * @type { number }
     * @memberof Csrank
     */
    @Column({ name: 'sex' })
    sex: number;
    /**
     * 职业
     *
     * @type { number }
     * @memberof Csrank
     */
    @Column({ name: 'job' })
    job: number;
    /**
     * 玩家所在的服务器的编号
     *
     * @type { number }
     * @memberof Csrank
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
    /**
     * 排行指定值
     *
     * @type { number }
     * @memberof Csrank
     */
    @Column({ name: 'value' })
    value: number;
}