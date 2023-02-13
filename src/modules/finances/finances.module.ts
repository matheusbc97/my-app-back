import { Module } from '@nestjs/common';
import { FinancesService } from './services/finances.service';
import { FinancesController } from './controllers/finances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Finance } from './entities/finance.entity';
import { FinancesByMonthController } from './controllers/finances-by-month.controller';
import { FinancesByMonthService } from './services/finances-by-month.service';
import { FinancesHistoricController } from './controllers/finances-historic.controller';
import { FinancesHistoricService } from './services/finances-historic.service';
import { FinanceHistoric } from './entities/finance-historic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Finance, FinanceHistoric])],
  controllers: [
    FinancesController,
    FinancesByMonthController,
    FinancesHistoricController,
  ],
  providers: [FinancesService, FinancesByMonthService, FinancesHistoricService],
})
export class FinancesModule {}
