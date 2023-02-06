import { ApiProperty } from '@nestjs/swagger';
import { UpdateGymExerciseItemDto } from './update-gym-exercise-item.dto';

export class UpdateGymExerciseDto {
  @ApiProperty({ type: UpdateGymExerciseItemDto, isArray: true })
  exercisesItems: UpdateGymExerciseItemDto[];
}
