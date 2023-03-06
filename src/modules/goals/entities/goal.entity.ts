import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { GoalQuest } from './goal-quest.entity';

@Entity()
export class Goal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  priority: number;

  @OneToMany(() => GoalQuest, (quest) => quest.goal)
  quests: GoalQuest[];
}
