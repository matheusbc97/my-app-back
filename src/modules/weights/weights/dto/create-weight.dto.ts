import { ApiProperty } from '@nestjs/swagger';

export class CreateWeightDto {
  @ApiProperty()
  value: number;

  @ApiProperty()
  date: Date;
}
