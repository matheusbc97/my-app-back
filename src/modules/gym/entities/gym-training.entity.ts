import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { GymExerciseItem } from './gym-exercise-item.entity';
import { GymExercise } from './gym-exercise.entity';

@Entity()
export class GymTraining {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => GymExercise, (gymExercise) => gymExercise.training)
  exercises: GymExerciseItem[];
}
