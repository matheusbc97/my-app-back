import { ApiProperty } from '@nestjs/swagger';

export class UpdateFinancePaymentDto {
  @ApiProperty()
  date?: Date;

  @ApiProperty()
  financeId?: number;
}
