import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * accountpsw
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Accountpsw
 */
@Entity({
    name: 'accountpsw'
})
export class Accountpsw {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Accountpsw
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * accountid
     *
     * @type { number }
     * @memberof Accountpsw
     */
    @Column({ name: 'accountid' })
    accountid: number;
    /**
     * serverindex
     *
     * @type { number }
     * @memberof Accountpsw
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
    /**
     * psw
     *
     * @type { string }
     * @memberof Accountpsw
     */
    @Column({ name: 'psw' })
    psw: string;
}