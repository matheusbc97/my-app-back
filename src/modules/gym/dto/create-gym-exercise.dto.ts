import { ApiProperty } from '@nestjs/swagger';
import { CreateGymExerciseItemDto } from './create-gym-exercise-item.dto';

export class CreateGymExerciseDto {
  @ApiProperty({ type: CreateGymExerciseItemDto, isArray: true })
  exercisesItems: CreateGymExerciseItemDto[];

  @ApiProperty()
  trainingId: number;
}
