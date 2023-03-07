import { Module } from '@nestjs/common';
import { FinancesService } from './services/finances.service';
import { FinancesController } from './controllers/finances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Finance } from './entities/finance.entity';
import { FinancesByMonthController } from './controllers/finances-by-month.controller';
import { FinancesByMonthService } from './services/finances-by-month.service';
import { FinancesPaymentController } from './controllers/finances-payment.controller';
import { FinancesPaymentService } from './services/finances-payment.service';
import { FinancePayment } from './entities/finance-payment.entity';
import { FinanceNote } from './entities/finance-note.entity';
import { FinancesNotesController } from './controllers/finances-notes.controller';
import { FinancesNotesService } from './services/finances-notes.service';
import { Bank } from './entities/bank.entity';
import { FinancesBanksController } from './controllers/finances-banks.controller';
import { FinancesBanksService } from './services/finances-banks.service';
import { PaymentMethod } from './entities/payment-method.entity';
import { PaymentMethodsController } from './controllers/payment-methods.controller';
import { PaymentMethodsService } from './services/payment-methods.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Finance,
      FinancePayment,
      FinanceNote,
      Bank,
      PaymentMethod,
    ]),
  ],
  controllers: [
    FinancesController,
    FinancesByMonthController,
    FinancesPaymentController,
    FinancesNotesController,
    FinancesBanksController,
    PaymentMethodsController,
  ],
  providers: [
    FinancesService,
    FinancesByMonthService,
    FinancesPaymentService,
    FinancesNotesService,
    FinancesBanksService,
    PaymentMethodsService,
  ],
})
export class FinancesModule {}
