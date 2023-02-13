import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FinanceByMonthDto } from '../dto/finance-by-month.dto';
import { GetFinancesByMonthParamsDto } from '../dto/get-finances-by-month-params.dto';
import { Finance } from '../entities/finance.entity';

@Injectable()
export class FinancesByMonthService {
  constructor(
    @InjectRepository(Finance)
    private financesRepository: Repository<Finance>,
  ) {}

  async findByMonth({
    yearsAndMonths,
  }: GetFinancesByMonthParamsDto): Promise<FinanceByMonthDto[]> {
    const finances = await this.financesRepository.find();

    const financesByMonth = yearsAndMonths.map((yearAndMonth) => {
      const [year, month] = yearAndMonth.split('-');

      const financeByMonth: FinanceByMonthDto = {
        finances,
        month: Number(month),
        year: Number(year),
        total: finances.reduce((acc, finance) => acc + finance.amount, 0),
      };

      return financeByMonth;
    });

    return financesByMonth;
  }
}
