import { ApiProperty } from '@nestjs/swagger';

export class CreateFinanceDto {
  @ApiProperty()
  paymentMethod: string;

  @ApiProperty()
  day: number;

  @ApiProperty()
  fixedDate: boolean;

  @ApiProperty()
  amount: number;
  //currencyValue: CurrencyValue;

  @ApiProperty()
  name: string;
}
