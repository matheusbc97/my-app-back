import { ApiProperty } from '@nestjs/swagger';

export class GetWeightDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  value: number;

  @ApiProperty()
  date: Date;
}
