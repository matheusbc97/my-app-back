import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Goal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  priority: number;
}
