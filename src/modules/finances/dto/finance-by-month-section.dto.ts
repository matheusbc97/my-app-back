import { ApiProperty } from '@nestjs/swagger';
import { FinanceByMonthDto } from './finance-by-month.dto';

export class FinanceByMonthSectionDto {
  @ApiProperty()
  month: number;

  @ApiProperty()
  year: number;

  @ApiProperty({
    type: FinanceByMonthDto,
    isArray: true,
  })
  finances: FinanceByMonthDto[];

  @ApiProperty()
  total: number;
}
