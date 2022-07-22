import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * zycount
 * @Date 2022/7/22 15:18:38
 * @author vincent
 * @export
 * @class Zycount
 */
@Entity({
    name: 'zycount'
})
export class Zycount {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Zycount
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 阵营id
     *
     * @type { number }
     * @memberof Zycount
     */
    @Column({ name: 'zy' })
    zy: number;
    /**
     * 对应阵营的用户数，表示多少人选择了这个阵营
     *
     * @type { number }
     * @memberof Zycount
     */
    @Column({ name: 'usercount' })
    usercount: number;
    /**
     * 服务器的id
     *
     * @type { number }
     * @memberof Zycount
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
}