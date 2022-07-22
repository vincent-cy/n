import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorfriends
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorfriends
 */
@Entity({
    name: 'actorfriends'
})
export class Actorfriends {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorfriends
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 角色id
     *
     * @type { number }
     * @memberof Actorfriends
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 关系类型，如0表示伴侣，1表示师父
     *
     * @type { number }
     * @memberof Actorfriends
     */
    @Column({ name: 'rstype' })
    rstype: number;
    /**
     * 对方的id，如关系是师徒，则这个是师傅的角色id
            
     *
     * @type { number }
     * @memberof Actorfriends
     */
    @Column({ name: 'friendid' })
    friendid: number;
    /**
     * 角色名，对应Friendid字段
     *
     * @type { string }
     * @memberof Actorfriends
     */
    @Column({ name: 'friendname' })
    friendname: string;
    /**
     * 用于操作的参数值
     *
     * @type { number }
     * @memberof Actorfriends
     */
    @Column({ name: 'param' })
    param: number;
}