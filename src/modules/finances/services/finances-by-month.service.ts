import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { FinanceByMonthSectionDto } from '../dto/finance-by-month-section.dto';
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

  async findByMonth({
    yearAndMonthStart,
    yearAndMonthEnd,
  }: GetFinancesByMonthParamsDto) {
    const finances = await this.financesRepository.find();

    const [yearStart, monthStart] =
      yearAndMonthToNumberArray(yearAndMonthStart);

    const [yearEnd, monthEnd] = yearAndMonthToNumberArray(yearAndMonthEnd);

    const yearEndLessYearStart = yearEnd - yearStart;
    const monthEndLessMonthStart = monthEnd - monthStart;

    const monthsLength = yearEndLessYearStart * 12 + monthEndLessMonthStart + 1;

    const financesPayments = await this.financesPaymentsRepository.find({
      where: {
        date: Between(
          new Date(yearStart, monthStart - 1, 0),
          new Date(yearEnd, monthEnd, 1),
        ),
      },
    });

    const financesByMonth = Array.from({ length: monthsLength }, (_, index) => {
      const year = yearStart + Math.floor((monthStart + index) / 12);
      const month = (monthStart + index) % 12;

      const financesWithPayment = finances.map((finance) => {
        const financePayment = financesPayments.find(
          (financePayment) =>
            financePayment.financeId === finance.id &&
            financePayment.date.getMonth() === month &&
            financePayment.date.getFullYear() === year,
        );

        return {
          ...finance,
          payment: financePayment,
        };
      });

      const financeByMonth: FinanceByMonthSectionDto = {
        finances: financesWithPayment,
        month,
        year,
        total: finances.reduce((acc, finance) => acc + finance.amount, 0),
      };

      return financeByMonth;
    });

    return financesByMonth;
  }
}
