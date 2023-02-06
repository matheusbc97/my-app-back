import { ApiProperty } from '@nestjs/swagger';

export class UpdateGymExerciseItemDto {
  @ApiProperty({ required: false })
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  weight: string;

  @ApiProperty()
  series: number;

  @ApiProperty()
  repetitions: number;
}
