import { ApiProperty } from '@nestjs/swagger';

export class GetFinancesByMonthParamsDto {
  @ApiProperty({
    isArray: true,
    description: 'Array of years and months in the format YYYY-MM',
    example: ['2023-01', '2023-02'],
  })
  yearsAndMonths: string[];
}
