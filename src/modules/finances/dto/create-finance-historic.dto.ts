import { ApiProperty } from '@nestjs/swagger';

export class CreateFinanceHistoricDto {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  financeId: number;
}
