import { ApiProperty } from '@nestjs/swagger';

export class UpdateFinanceHistoricDto {
  @ApiProperty()
  date?: Date;

  @ApiProperty()
  financeId?: number;
}
