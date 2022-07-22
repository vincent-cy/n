import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * filternames
 * @Date 2022/7/22 15:18:37
 * @author vincent
 * @export
 * @class Filternames
 */
@Entity({
    name: 'filternames'
})
export class Filternames {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Filternames
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 屏蔽词
     *
     * @type { string }
     * @memberof Filternames
     */
    @Column({ name: 'namestr' })
    namestr: string;
}