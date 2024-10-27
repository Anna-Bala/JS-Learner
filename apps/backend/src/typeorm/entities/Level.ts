import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'levels' })
export class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
