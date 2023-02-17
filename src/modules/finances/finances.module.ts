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
import { FinanceNote } from './entities/finance-note.entity';
import { FinancesNotesController } from './controllers/finances-notes.controller';
import { FinancesNotesService } from './services/finances-notes.service';
import { Bank } from './entities/bank.entity';
import { FinancesBanksController } from './controllers/finances-banks.controller';
import { FinancesBanksService } from './services/finances-banks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Finance, FinancePayment, FinanceNote, Bank]),
  ],
  controllers: [
    FinancesController,
    FinancesByMonthController,
    FinancesPaymentController,
    FinancesNotesController,
    FinancesBanksController,
  ],
  providers: [
    FinancesService,
    FinancesByMonthService,
    FinancesPaymentService,
    FinancesNotesService,
    FinancesBanksService,
  ],
})
export class FinancesModule {}
