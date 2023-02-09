import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Weight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  date: Date;
}
