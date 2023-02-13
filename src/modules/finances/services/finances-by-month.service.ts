import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  LessThan,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { FinanceByMonthDto } from '../dto/finance-by-month.dto';
import { GetFinancesByMonthParamsDto } from '../dto/get-finances-by-month-params.dto';
import { FinanceHistoric } from '../entities/finance-historic.entity';
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
    @InjectRepository(FinanceHistoric)
    private financesHistoricRepository: Repository<FinanceHistoric>,
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

    const financesHistoric = await this.financesHistoricRepository.find({
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

      const financeByMonth: FinanceByMonthDto = {
        finances,
        month,
        year,
        total: finances.reduce((acc, finance) => acc + finance.amount, 0),
      };

      return financeByMonth;
    });

    return financesByMonth;
  }
}
