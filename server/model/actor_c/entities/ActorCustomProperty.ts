import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorCustomProperty
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class ActorCustomProperty
 */
@Entity({
    name: 'actorCustomProperty'
})
export class ActorCustomProperty {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof ActorCustomProperty
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家的actorid
     *
     * @type { string }
     * @memberof ActorCustomProperty
     */
    @Column({ name: 'actorid' })
    actorid: string;
    /**
     * 玩家自定义属性集
     *
     * @type { string }
     * @memberof ActorCustomProperty
     */
    @Column({ name: 'actorproperty' })
    actorproperty: string;
}