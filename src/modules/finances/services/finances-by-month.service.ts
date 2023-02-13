import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetFinancesByMonthParamsDto } from '../dto/get-finances-by-month-params.dto';
import { Finance } from '../entities/finance.entity';

@Injectable()
export class FinancesByMonthService {
  constructor(
    @InjectRepository(Finance)
    private financesRepository: Repository<Finance>,
  ) {}

  async findByMonth(params: GetFinancesByMonthParamsDto) {
    const finances = await this.financesRepository.find();

    return finances.map((finance) => {
      return {};
    });
  }
}
