import { Finance } from '../entities/finance.entity';

export interface FinanceByMonth {
  month: number;
  year: number;
  finances: Finance[];
  total: number;
}
