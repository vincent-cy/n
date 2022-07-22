import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actormsg
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actormsg
 */
@Entity({
    name: 'actormsg'
})
export class Actormsg {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actormsg
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * msgid
     *
     * @type { string }
     * @memberof Actormsg
     */
    @Column({ name: 'msgid' })
    msgid: string;
    /**
     * 消息对应的角色id，表示这个消息要发送的对象
     *
     * @type { number }
     * @memberof Actormsg
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 消息的类型
     *
     * @type { number }
     * @memberof Actormsg
     */
    @Column({ name: 'msgtype' })
    msgtype: number;
    /**
     * 消息的内容，二进制数据
     *
     * @type { string }
     * @memberof Actormsg
     */
    @Column({ name: 'msg' })
    msg: string;
}