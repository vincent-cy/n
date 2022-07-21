import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {formatDate} from '../../../../utils/date'

@Entity("user")
export class User {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number | undefined;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        unique: true,
    })
    username: string | undefined

    @Column({
        type: 'varchar',
        nullable: false,
        // select = false  默认查询 不返回
        // select: false,
      })
    password: string | undefined;

    @Column({
      type: 'varchar',
    })
    role: string | undefined;

    @CreateDateColumn({
        type: 'timestamp',
        transformer: {
          to: (value: Date): Date => value,
          from: (value: Date): string => formatDate(value),
        },
      })
      created_at: Date;
    
      @UpdateDateColumn({
        nullable: true,
        type: 'timestamp',
        transformer: {
          to: (value: Date): Date => value,
          from: (value: Date): string => formatDate(value),
        },
      })
      updated_at: Date;
    
      @DeleteDateColumn({
        type: 'timestamp',
        default: null,
        transformer: {
          to: (value: Date): Date => value,
          from: (value: Date): string => formatDate(value),
        },
      })
      deleted_at: Date;
}
