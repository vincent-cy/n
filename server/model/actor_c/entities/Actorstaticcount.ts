import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * actorstaticcount
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Actorstaticcount
 */
@Entity({
    name: 'actorstaticcount'
})
export class Actorstaticcount {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Actorstaticcount
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 计数器id
     *
     * @type { number }
     * @memberof Actorstaticcount
     */
    @Column({ name: 'nstatictype' })
    nstatictype: number;
    /**
     * 值
     *
     * @type { string }
     * @memberof Actorstaticcount
     */
    @Column({ name: 'nvalue' })
    nvalue: string;
}