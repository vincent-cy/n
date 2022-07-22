import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * servermailattach
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Servermailattach
 */
@Entity({
    name: 'servermailattach'
})
export class Servermailattach {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 全服邮件id
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'servermailid' })
    servermailid: number;
    /**
     * 奖励类型
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'type' })
    type: number;
    /**
     * 品质
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'quality' })
    quality: number;
    /**
     * 数量
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'count' })
    count: number;
    /**
     * 绑定
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'bind' })
    bind: number;
    /**
     * 强化星级
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'star' })
    star: number;
    /**
     * 强化损失星级
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'starlost' })
    starlost: number;
    /**
     * 铭刻等级
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'inscriptlevel' })
    inscriptlevel: number;
    /**
     * 铭刻经验
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'inscriptexp' })
    inscriptexp: number;
    /**
     * 幸运
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'luck' })
    luck: number;
    /**
     * 极品属性1
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'smith1' })
    smith1: number;
    /**
     * 极品属性2
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'smith2' })
    smith2: number;
    /**
     * 极品属性3

     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'smith3' })
    smith3: number;
    /**
     * 极品属性4
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'smith4' })
    smith4: number;
    /**
     * 极品属性5
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'smith5' })
    smith5: number;
    /**
     * 鉴定属性槽被解锁的数量
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'identifyslotnum' })
    identifyslotnum: number;
    /**
     * 物品已经被鉴定的次数
     *
     * @type { number }
     * @memberof Servermailattach
     */
    @Column({ name: 'identifynum' })
    identifynum: number;
}