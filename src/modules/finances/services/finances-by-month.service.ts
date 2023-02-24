import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { GetFinancesByMonthParamsDto } from '../dto/get-finances-by-month-params.dto';
import { FinancePayment } from '../entities/finance-payment.entity';
import { Finance } from '../entities/finance.entity';

function yearAndMonthToNumberArray(yearAndMonth: string): [number, number] {
  const [year, month] = yearAndMonth.split('-').map((it) => Number(it));

  return [year, month];
}

@Injectable()
export class FinancesByMonthService {
  constructor(
    @InjectRepository(Finance)
    private financesRepository: Repository<Finance>,
    @InjectRepository(FinancePayment)
    private financesPaymentsRepository: Repository<FinancePayment>,
  ) {}

  async findByMonth({ yearAndMonth }: GetFinancesByMonthParamsDto) {
    const finances = await this.financesRepository.find();

    const [year, month] = yearAndMonthToNumberArray(yearAndMonth);

    const financesPayments = await this.financesPaymentsRepository.find({
      where: {
        date: Between(new Date(year, month - 1, 0), new Date(year, month, 1)),
      },
    });

    const financesByMonth = finances.map((finance) => {
      const financePayment = financesPayments.find(
        (financePayment) =>
          financePayment.financeId === finance.id &&
          financePayment.date.getMonth() === month - 1 &&
          financePayment.date.getFullYear() === year,
      );

      return {
        ...finance,
        payment: financePayment,
      };
    });

    return financesByMonth;
  }
}
