import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GymExerciseController } from './controllers/gym-exercise.controller';
import { GymTrainingController } from './controllers/gym-training.controller';
import { GymExerciseItem } from './entities/gym-exercise-item.entity';
import { GymExercise } from './entities/gym-exercise.entity';
import { GymTraining } from './entities/gym-training.entity';
import { GymExerciseService } from './services/gym-exercise.service';
import { GymTrainingService } from './services/gym-training.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GymExercise, GymTraining, GymExerciseItem]),
  ],
  controllers: [GymExerciseController, GymTrainingController],
  providers: [GymExerciseService, GymTrainingService],
})
export class GymModule {}
