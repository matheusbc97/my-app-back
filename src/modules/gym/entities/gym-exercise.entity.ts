import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GymExerciseItem } from './gym-exercise-item.entity';
import { GymTraining } from './gym-training.entity';

@Entity()
export class GymExercise {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    () => GymExerciseItem,
    (gymExerciseItem) => gymExerciseItem.exercise,
  )
  exercisesItems: GymExerciseItem[];

  @ManyToOne(() => GymTraining, (gymTraining) => gymTraining.exercises)
  training: GymTraining;
}
