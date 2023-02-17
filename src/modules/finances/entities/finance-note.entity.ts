import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FinanceNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description?: string;

  @Column()
  name: string;

  @Column()
  amount: number;
}
