import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * adminaccount
 * @Date 2022/7/22 15:16:22
 * @author vincent
 * @export
 * @class Adminaccount
 */
@Entity({
    name: 'adminaccount'
})
export class Adminaccount {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Adminaccount
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 类型，0表示是帐号，1表示ip
     *
     * @type { number }
     * @memberof Adminaccount
     */
    @Column({ name: 'accounttype' })
    accounttype: number;
    /**
     * ip或者帐号
     *
     * @type { string }
     * @memberof Adminaccount
     */
    @Column({ name: 'rectdata' })
    rectdata: string;
}