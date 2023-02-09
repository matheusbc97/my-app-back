import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GymExerciseItemController } from './controllers/gym-exercise-item.controller';
import { GymExerciseController } from './controllers/gym-exercise.controller';
import { GymTrainingController } from './controllers/gym-training.controller';
import { GymExerciseItem } from './entities/gym-exercise-item.entity';
import { GymExercise } from './entities/gym-exercise.entity';
import { GymTraining } from './entities/gym-training.entity';
import { GymExerciseItemService } from './services/gym-exercise-item.service';
import { GymExerciseService } from './services/gym-exercise.service';
import { GymTrainingService } from './services/gym-training.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GymExercise, GymTraining, GymExerciseItem]),
  ],
  controllers: [
    GymExerciseController,
    GymTrainingController,
    GymExerciseItemController,
  ],
  providers: [GymExerciseService, GymTrainingService, GymExerciseItemService],
})
export class GymModule {}
