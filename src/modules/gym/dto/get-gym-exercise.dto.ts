import { ApiProperty } from '@nestjs/swagger';
import { GetGymExerciseItemDto } from './get-gym-exercise-item.dto';

export class GetGymExerciseDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: GetGymExerciseItemDto, isArray: true })
  exercisesItems: GetGymExerciseItemDto[];
}
