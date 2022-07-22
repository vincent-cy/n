import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorvariable
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorvariable
 */
@Entity({
    name: 'actorvariable'
})
export class Actorvariable {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorvariable
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家的角色id
     *
     * @type { string }
     * @memberof Actorvariable
     */
    @Column({ name: 'actorid' })
    actorid: string;
    /**
     * variable
     *
     * @type { string }
     * @memberof Actorvariable
     */
    @Column({ name: 'variable' })
    variable: string;
}