import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * jobcount
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Jobcount
 */
@Entity({
    name: 'jobcount'
})
export class Jobcount {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Jobcount
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 职业id
     *
     * @type { number }
     * @memberof Jobcount
     */
    @Column({ name: 'job' })
    job: number;
    /**
     * 对应职业的用户数，表示多少人选择了这个职业
     *
     * @type { number }
     * @memberof Jobcount
     */
    @Column({ name: 'usercount' })
    usercount: number;
    /**
     * 服务器的id
     *
     * @type { number }
     * @memberof Jobcount
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
}