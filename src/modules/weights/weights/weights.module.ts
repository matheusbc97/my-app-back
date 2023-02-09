import { Module } from '@nestjs/common';
import { WeightsService } from './services/weights.service';
import { WeightsController } from './controllers/weights.controller';
import { Weight } from './entities/weight.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Weight])],
  controllers: [WeightsController],
  providers: [WeightsService],
})
export class WeightsModule {}
