import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * gameserveraddress
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Gameserveraddress
 */
@Entity({
    name: 'gameserveraddress'
})
export class Gameserveraddress {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Gameserveraddress
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * serverindex
     *
     * @type { number }
     * @memberof Gameserveraddress
     */
    @Column({ name: 'serverindex' })
    serverindex: number;
    /**
     * serveraddress
     *
     * @type { string }
     * @memberof Gameserveraddress
     */
    @Column({ name: 'serveraddress' })
    serveraddress: string;
    /**
     * serverport
     *
     * @type { number }
     * @memberof Gameserveraddress
     */
    @Column({ name: 'serverport' })
    serverport: number;
}