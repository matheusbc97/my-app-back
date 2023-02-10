import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFinanceDto } from '../dto/create-finance.dto';
import { UpdateFinanceDto } from '../dto/update-finance.dto';
import { Finance } from '../entities/finance.entity';

@Injectable()
export class FinancesService {
  constructor(
    @InjectRepository(Finance)
    private financesRepository: Repository<Finance>,
  ) {}

  create(createFinanceDto: CreateFinanceDto) {
    return this.financesRepository.save(createFinanceDto);
  }

  findAll() {
    return this.financesRepository.find();
  }

  async findOne(id: number) {
    const response = await this.financesRepository.findOneBy({ id });

    if (response === null) {
      throw new NotFoundException(`Finance with id ${id} not found`);
    }

    return response;
  }

  update(id: number, updateFinanceDto: UpdateFinanceDto) {
    return this.financesRepository.save({
      id,
      ...updateFinanceDto,
    });
  }

  async remove(id: number) {
    const response = await this.financesRepository.delete(id);

    if (response.affected === 0) {
      throw new NotFoundException(`Finance with id ${id} not found`);
    }
  }
}
