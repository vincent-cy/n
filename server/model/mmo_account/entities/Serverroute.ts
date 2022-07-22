import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * serverroute
 * @Date 2022/7/22 15:16:22
 * @author vincent
 * @export
 * @class Serverroute
 */
@Entity({
    name: 'serverroute'
})
export class Serverroute {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Serverroute
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 服务器id
     *
     * @type { number }
     * @memberof Serverroute
     */
    @Column({ name: 'serverid' })
    serverid: number;
    /**
     * 网关的ip或者名字
     *
     * @type { string }
     * @memberof Serverroute
     */
    @Column({ name: 'hostname' })
    hostname: string;
    /**
     * 网关的端口
     *
     * @type { number }
     * @memberof Serverroute
     */
    @Column({ name: 'port' })
    port: number;
    /**
     * 连接的公共服务器Id
     *
     * @type { number }
     * @memberof Serverroute
     */
    @Column({ name: 'cserverid' })
    cserverid: number;
    /**
     * 服务器名称
     *
     * @type { string }
     * @memberof Serverroute
     */
    @Column({ name: 'servername' })
    servername: string;
}