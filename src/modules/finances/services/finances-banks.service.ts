import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFinanceBankDto } from '../dto/create-finance-bank.dto';
import { UpdateFinanceBankDto } from '../dto/update-finance-bank.dto';
import { Bank } from '../entities/bank.entity';

@Injectable()
export class FinancesBanksService {
  constructor(
    @InjectRepository(Bank)
    private financesBanksRepository: Repository<Bank>,
  ) {}

  create(params: CreateFinanceBankDto) {
    return this.financesBanksRepository.save(params);
  }

  findAll() {
    return this.financesBanksRepository.find();
  }

  async findOne(id: number) {
    const response = await this.financesBanksRepository.findOneBy({ id });

    if (response === null) {
      throw new NotFoundException(`Finance Bank with id ${id} not found`);
    }

    return response;
  }

  update(id: number, updateFinanceNoteDto: UpdateFinanceBankDto) {
    return this.financesBanksRepository.save({
      id,
      ...updateFinanceNoteDto,
    });
  }

  async remove(id: number) {
    const response = await this.financesBanksRepository.delete(id);

    if (response.affected === 0) {
      throw new NotFoundException(`Finance Bank with id ${id} not found`);
    }
  }
}
