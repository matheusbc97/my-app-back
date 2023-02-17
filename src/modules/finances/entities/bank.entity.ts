import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BankTypeEnum } from '../enums/bank-type.enum';

@Entity()
export class Bank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: BankTypeEnum,
    default: BankTypeEnum.PERSONAL,
  })
  type: BankTypeEnum;
}
