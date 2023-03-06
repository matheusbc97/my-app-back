import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Finance } from './finance.entity';

@Entity()
export class FinancePayment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => Finance, (finance) => finance.financePayments, {
    onDelete: 'CASCADE',
  })
  finance: Finance;

  @Column()
  financeId: number;
}
