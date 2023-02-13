import { Finance } from '../entities/finance.entity';

export class FinanceByMonthDto {
  month: number;
  year: number;
  finances: Finance[];
  total: number;
}
