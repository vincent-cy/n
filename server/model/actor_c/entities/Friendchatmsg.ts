import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * friendchatmsg
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Friendchatmsg
 */
@Entity({
    name: 'friendchatmsg'
})
export class Friendchatmsg {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Friendchatmsg
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家id
     *
     * @type { number }
     * @memberof Friendchatmsg
     */
    @Column({ name: 'nactorid' })
    nactorid: number;
    /**
     * 对方的id
     *
     * @type { number }
     * @memberof Friendchatmsg
     */
    @Column({ name: 'tagetid' })
    tagetid: number;
    /**
     * 发送消息的时间
     *
     * @type { number }
     * @memberof Friendchatmsg
     */
    @Column({ name: 'ntime' })
    ntime: number;
    /**
     * 聊天消息
     *
     * @type { string }
     * @memberof Friendchatmsg
     */
    @Column({ name: 'chatmsg' })
    chatmsg: string;
    /**
     * 预留
     *
     * @type { number }
     * @memberof Friendchatmsg
     */
    @Column({ name: 'reserver' })
    reserver: number;
}