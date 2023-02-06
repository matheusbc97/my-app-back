import { ApiProperty } from '@nestjs/swagger';

export class GetGymExerciseItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  weight: string;

  @ApiProperty()
  series: number;

  @ApiProperty()
  repetitions: number;
}
