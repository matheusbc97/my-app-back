import { ApiProperty } from '@nestjs/swagger';

export class GetFinancesByMonthParamsDto {
  @ApiProperty({
    example: '2023-01',
  })
  yearAndMonth: string;
}
