import { ApiProperty } from '@nestjs/swagger';

export class GetFinancesByMonthParamsDto {
  @ApiProperty({
    example: '2023-01',
  })
  yearAndMonthStart: string;

  @ApiProperty({
    example: '2023-02',
  })
  yearAndMonthEnd: string;
}
