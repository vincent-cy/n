import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorapplyguildresult
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorapplyguildresult
 */
@Entity({
    name: 'actorapplyguildresult'
})
export class Actorapplyguildresult {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorapplyguildresult
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Actorapplyguildresult
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 工会id
     *
     * @type { number }
     * @memberof Actorapplyguildresult
     */
    @Column({ name: 'guildid' })
    guildid: number;
}