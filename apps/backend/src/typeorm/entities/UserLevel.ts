import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Level } from './Level';
import { User } from './User';

@Entity({ name: 'user_level' })
export class UserLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Level)
  @JoinColumn({ name: 'level_id' })
  level: Level;

  @Column()
  score: number;
}
