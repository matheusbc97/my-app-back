import { ApiProperty } from '@nestjs/swagger';

export class CreateFinancePaymentDto {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  financeId: number;
}
