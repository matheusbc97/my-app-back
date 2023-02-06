import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GymExercise } from './gym-exercise.entity';

@Entity()
export class GymExerciseItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  weight: string;

  @Column()
  series: number;

  @Column()
  repetitions: number;

  @ManyToOne(() => GymExercise, (gymExercise) => gymExercise.exercisesItems)
  exercise: GymExercise;
}
