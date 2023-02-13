import { ApiProperty } from '@nestjs/swagger';
import { FinancePayment } from '../entities/finance-payment.entity';

export class FinanceByMonthDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  paymentMethod: string;

  @ApiProperty()
  paid: boolean;

  @ApiProperty()
  day: number;

  @ApiProperty()
  fixedDate: boolean;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  payment: FinancePayment;
}
