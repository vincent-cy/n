import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * servermail
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Servermail
 */
@Entity({
    name: 'servermail'
})
export class Servermail {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Servermail
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 全服邮件id
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'servermailid' })
    servermailid: number;
    /**
     * 角色id
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'actorid' })
    actorid: number;
    /**
     * 邮件标题
     *
     * @type { string }
     * @memberof Servermail
     */
    @Column({ name: 'title' })
    title: string;
    /**
     * 邮件内容
     *
     * @type { string }
     * @memberof Servermail
     */
    @Column({ name: 'content' })
    content: string;
    /**
     * 最低vip等级
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'minviplevel' })
    minviplevel: number;
    /**
     * 最高vip等级
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'maxviplevel' })
    maxviplevel: number;
    /**
     * 最低人物等级
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'minlevel' })
    minlevel: number;
    /**
     * 最高人物等级
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'maxlevel' })
    maxlevel: number;
    /**
     * 最早注册时间
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'minregistertime' })
    minregistertime: number;
    /**
     * 最晚注册时间
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'maxregistertime' })
    maxregistertime: number;
    /**
     * 最早登录时间
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'minlogintime' })
    minlogintime: number;
    /**
     * 最晚登录时间
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'maxlogintime' })
    maxlogintime: number;
    /**
     * 是否在线
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'online' })
    online: number;
    /**
     * 性别
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'sex' })
    sex: number;
    /**
     * 是否完成
     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'complete' })
    complete: number;
    /**
     * 邮件用途

     *
     * @type { number }
     * @memberof Servermail
     */
    @Column({ name: 'way' })
    way: number;
}