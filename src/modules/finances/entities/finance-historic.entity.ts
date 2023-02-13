import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Finance } from './finance.entity';

@Entity()
export class FinanceHistoric {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => Finance, (finance) => finance.financeHistoric, {
    onDelete: 'CASCADE',
  })
  finance: Finance;
}
