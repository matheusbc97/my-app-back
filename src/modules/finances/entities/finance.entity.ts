import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FinanceHistoric } from './finance-historic.entity';

@Entity()
export class Finance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paymentMethod: string;

  @Column()
  paid: boolean;

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

  @OneToMany(
    () => FinanceHistoric,
    (financeHistoric) => financeHistoric.finance,
  )
  financeHistoric: FinanceHistoric[];
}
