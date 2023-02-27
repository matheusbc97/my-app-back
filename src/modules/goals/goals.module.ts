import { Module } from '@nestjs/common';
import { GoalsService } from './services/goals.service';
import { GoalsController } from './controllers/goals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goal } from './entities/goal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Goal])],
  controllers: [GoalsController],
  providers: [GoalsService],
})
export class GoalsModule {}
