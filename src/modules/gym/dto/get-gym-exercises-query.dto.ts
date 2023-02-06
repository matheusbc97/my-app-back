import { ApiProperty } from '@nestjs/swagger';

export class GetGymExercisesQueryDto {
  @ApiProperty({ required: false })
  trainingId?: number;
}
