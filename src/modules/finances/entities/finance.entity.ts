import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FinancePayment } from './finance-payment.entity';

@Entity()
export class Finance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paymentMethod: string;

  @Column()
  day: number;

  @Column()
  fixedDate: boolean;

  @Column()
  amount: number;
  //currencyValue: CurrencyValue;

  @Column()
  name: string;
  //type: FinanceType;
  //group: Group;

  @OneToMany(() => FinancePayment, (financePayment) => financePayment.finance)
  financePayment: FinancePayment[];
}
