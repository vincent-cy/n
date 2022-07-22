import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorbinarydata
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorbinarydata
 */
@Entity({
    name: 'actorbinarydata'
})
export class Actorbinarydata {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorbinarydata
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 玩家的actorid
     *
     * @type { string }
     * @memberof Actorbinarydata
     */
    @Column({ name: 'actorid' })
    actorid: string;
    /**
     * 任务数据
     *
     * @type { string }
     * @memberof Actorbinarydata
     */
    @Column({ name: 'quest' })
    quest: string;
    /**
     * 成就完成和是否领取奖励的字段
     *
     * @type { string }
     * @memberof Actorbinarydata
     */
    @Column({ name: 'achievefinishstate' })
    achievefinishstate: string;
    /**
     * 成就事件的触发次数字段
     *
     * @type { string }
     * @memberof Actorbinarydata
     */
    @Column({ name: 'achieveeventdata' })
    achieveeventdata: string;
    /**
     * 玩家的称号列表
     *
     * @type { string }
     * @memberof Actorbinarydata
     */
    @Column({ name: 'titles' })
    titles: string;
}