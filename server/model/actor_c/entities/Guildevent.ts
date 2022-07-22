import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * guildevent
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Guildevent
 */
@Entity({
    name: 'guildevent'
})
export class Guildevent {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Guildevent
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 帮派id
     *
     * @type { number }
     * @memberof Guildevent
     */
    @Column({ name: 'guildid' })
    guildid: number;
    /**
     * 发生的时间
     *
     * @type { number }
     * @memberof Guildevent
     */
    @Column({ name: 'ntime' })
    ntime: number;
    /**
     * 事件id
     *
     * @type { number }
     * @memberof Guildevent
     */
    @Column({ name: 'eventid' })
    eventid: number;
    /**
     * 参数1
     *
     * @type { number }
     * @memberof Guildevent
     */
    @Column({ name: 'nparam1' })
    nparam1: number;
    /**
     * 参数2
     *
     * @type { number }
     * @memberof Guildevent
     */
    @Column({ name: 'nparam2' })
    nparam2: number;
    /**
     * 参数3
     *
     * @type { number }
     * @memberof Guildevent
     */
    @Column({ name: 'nparam3' })
    nparam3: number;
    /**
     * 参数4
     *
     * @type { string }
     * @memberof Guildevent
     */
    @Column({ name: 'nparam4' })
    nparam4: string;
    /**
     * 参数5
     *
     * @type { string }
     * @memberof Guildevent
     */
    @Column({ name: 'nparam5' })
    nparam5: string;
    /**
     * 保留
     *
     * @type { number }
     * @memberof Guildevent
     */
    @Column({ name: 'reserver' })
    reserver: number;
    /**
     * neventmsg
     *
     * @type { string }
     * @memberof Guildevent
     */
    @Column({ name: 'neventmsg' })
    neventmsg: string;
}