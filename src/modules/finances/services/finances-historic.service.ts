import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFinanceHistoricDto } from '../dto/create-finance-historic.dto';
import { UpdateFinanceHistoricDto } from '../dto/udate-finance-historic.dto';
import { FinanceHistoric } from '../entities/finance-historic.entity';

@Injectable()
export class FinancesHistoricService {
  constructor(
    @InjectRepository(FinanceHistoric)
    private financesHistoricRepository: Repository<FinanceHistoric>,
  ) {}

  create({ financeId, ...params }: CreateFinanceHistoricDto) {
    return this.financesHistoricRepository.save({
      finance: { id: financeId },
      ...params,
    });
  }

  findAll() {
    return this.financesHistoricRepository.find();
  }

  async findOne(id: number) {
    const response = await this.financesHistoricRepository.findOneBy({ id });

    if (response === null) {
      throw new NotFoundException(`Finance Historic with id ${id} not found`);
    }

    return response;
  }

  update(id: number, updateFinanceHistoricDto: UpdateFinanceHistoricDto) {
    return this.financesHistoricRepository.save({
      id,
      ...updateFinanceHistoricDto,
    });
  }

  async remove(id: number) {
    const response = await this.financesHistoricRepository.delete(id);

    if (response.affected === 0) {
      throw new NotFoundException(`Finance Historic with id ${id} not found`);
    }
  }
}
