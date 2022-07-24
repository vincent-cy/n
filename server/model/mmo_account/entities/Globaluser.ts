import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
/**
 * globaluser
 * @Date 2022/7/22 15:16:22
 * @author vincent
 * @export
 * @class Globaluser
 */
@Entity({
  name: 'globaluser',
})
export class Globaluser {
  /**
   * 主键 id
   *
   * @type { number }
   * @memberof Globaluser
   */
  @PrimaryGeneratedColumn()
  userid: number;
  /**
   * 用户帐户的字符串
   *
   * @type { string }
   * @memberof Globaluser
   */
  @Column('varchar', { name: 'account' })
  account: string;
  /**
   * 玩家的密码
   *
   * @type { string }
   * @memberof Globaluser
   */
  @Column('varchar', { name: 'passwd' })
  passwd: string;
  /**
   * 玩家的身份证号码
   *
   * @type { string }
   * @memberof Globaluser
   */
  @Column('varchar', { name: 'identity' })
  identity: string;
  /**
   * 帐号的创建时间
   *
   * @type { string }
   * @memberof Globaluser
   */
  @Column('varchar', { name: 'createtime' })
  createtime: string;
  /**
   * 上次登录时间
   *
   * @type { string }
   * @memberof Globaluser
   */
  @Column('varchar', { name: 'updatetime' })
  updatetime: string;
  /**
   * 用户上次登录的IP地址，64位整形IP地址，支持IPV6(现在记录创账号ip)
   *
   * @type { string }
   * @memberof Globaluser
   */
  @Column('varchar', { name: 'updateip' })
  updateip: string;
  /**
   * 用户离线时间，用于防沉迷判断当前登录距离上次下线是否足5小时
   *
   * @type { string }
   * @memberof Globaluser
   */
  @Column('varchar', { name: 'offlinetime' })
  offlinetime: string;
  /**
   * 连续在线时间，用于进行防沉迷控制
   *
   * @type { number }
   * @memberof Globaluser
   */
  @Column('varchar', { name: 'fcmonline' })
  fcmonline: number;
  /**
   * 账号自创建以来的累积在线时长，单位是秒
   *
   * @type { number }
   * @memberof Globaluser
   */
  @Column('varchar', { name: 'totalonline' })
  totalonline: number;
  /**
   * 玩家的GM等级，普通玩家是0.GM等级越高表示权限越高。1-10级GM
   *
   * @type { number }
   * @memberof Globaluser
   */
  @Column('int', { name: 'gmlevel' })
  gmlevel: number;
  /**
   * 玩家在的服务器的index
   *
   * @type { number }
   * @memberof Globaluser
   */
  @Column('int', { name: 'inserver' })
  inserver: number;
}
