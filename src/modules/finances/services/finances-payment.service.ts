import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFinancePaymentDto } from '../dto/create-finance-payment.dto';
import { UpdateFinancePaymentDto } from '../dto/update-finance-payment.dto';
import { FinancePayment } from '../entities/finance-payment.entity';

@Injectable()
export class FinancesPaymentService {
  constructor(
    @InjectRepository(FinancePayment)
    private financesPaymentsRepository: Repository<FinancePayment>,
  ) {}

  create({ financeId, ...params }: CreateFinancePaymentDto) {
    return this.financesPaymentsRepository.save({
      finance: { id: financeId },
      ...params,
    });
  }

  findAll() {
    return this.financesPaymentsRepository.find();
  }

  async findOne(id: number) {
    const response = await this.financesPaymentsRepository.findOneBy({ id });

    if (response === null) {
      throw new NotFoundException(`Finance Historic with id ${id} not found`);
    }

    return response;
  }

  update(id: number, updateFinancePaymentDto: UpdateFinancePaymentDto) {
    return this.financesPaymentsRepository.save({
      id,
      ...updateFinancePaymentDto,
    });
  }

  async remove(id: number) {
    const response = await this.financesPaymentsRepository.delete(id);

    if (response.affected === 0) {
      throw new NotFoundException(`Finance Historic with id ${id} not found`);
    }
  }
}
