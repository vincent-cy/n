import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorofflinedata
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorofflinedata
 */
@Entity({
    name: 'actorofflinedata'
})
export class Actorofflinedata {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorofflinedata
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家的actorid
     *
     * @type { string }
     * @memberof Actorofflinedata
     */
    @Column({ name: 'actorid' })
    actorid: string;
    /**
     * 离线数据，玩家属性集
     *
     * @type { string }
     * @memberof Actorofflinedata
     */
    @Column({ name: 'actorproperty' })
    actorproperty: string;
}