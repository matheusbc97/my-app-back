import { ApiProperty } from '@nestjs/swagger';

export class CreateGymExerciseItemDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  weight: string;

  @ApiProperty()
  series: number;

  @ApiProperty()
  repetitions: number;
}
