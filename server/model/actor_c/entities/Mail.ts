import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * mail
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Mail
 */
@Entity({
    name: 'mail'
})
export class Mail {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Mail
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * mailid
     *
     * @type { string }
     * @memberof Mail
     */
    @Column({ name: 'mailid' })
    mailid: string;
    /**
     * actorid
     *
     * @type { number }
     * @memberof Mail
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * srcid
     *
     * @type { number }
     * @memberof Mail
     */
    @Column({ name: 'srcid' })
    srcid: number;
    /**
     * title
     *
     * @type { string }
     * @memberof Mail
     */
    @Column({ name: 'title' })
    title: string;
    /**
     * content
     *
     * @type { string }
     * @memberof Mail
     */
    @Column({ name: 'content' })
    content: string;
    /**
     * createdt
     *
     * @type { number }
     * @memberof Mail
     */
    @Column({ name: 'createdt' })
    createdt: number;
    /**
     * state
     *
     * @type { string }
     * @memberof Mail
     */
    @Column({ name: 'state' })
    state: string;
    /**
     * 是否已经删除了
     *
     * @type { number }
     * @memberof Mail
     */
    @Column({ name: 'isdel' })
    isdel: number;
}