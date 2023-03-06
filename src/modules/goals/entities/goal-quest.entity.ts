import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Goal } from './goal.entity';

@Entity()
export class GoalQuest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Goal, (goal) => goal.quests, {
    onDelete: 'CASCADE',
  })
  goal: Goal;
}
