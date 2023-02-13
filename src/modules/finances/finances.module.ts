import { Module } from '@nestjs/common';
import { FinancesService } from './services/finances.service';
import { FinancesController } from './controllers/finances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Finance } from './entities/finance.entity';
import { FinancesByMonthController } from './controllers/finances-by-month.controller';
import { FinancesByMonthService } from './services/finances-by-month.service';
import { FinancesPaymentController } from './controllers/finances-payment.controller';
import { FinancesPaymentService } from './services/finances-historic.service';
import { FinancePayment } from './entities/finance-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Finance, FinancePayment])],
  controllers: [
    FinancesController,
    FinancesByMonthController,
    FinancesPaymentController,
  ],
  providers: [FinancesService, FinancesByMonthService, FinancesPaymentService],
})
export class FinancesModule {}
