import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentMethodDto } from '../dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from '../dto/update-payment-method.dto';
import { PaymentMethod } from '../entities/payment-method.entity';

@Injectable()
export class PaymentMethodsService {
  constructor(
    @InjectRepository(PaymentMethod)
    private paymentMethodsRepository: Repository<PaymentMethod>,
  ) {}

  create(params: CreatePaymentMethodDto) {
    return this.paymentMethodsRepository.save(params);
  }

  findAll() {
    return this.paymentMethodsRepository.find();
  }

  async findOne(id: number) {
    const response = await this.paymentMethodsRepository.findOneBy({ id });

    if (response === null) {
      throw new NotFoundException(`Payment Method with id ${id} not found`);
    }

    return response;
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentMethodsRepository.save({
      id,
      ...updatePaymentMethodDto,
    });
  }

  async remove(id: number) {
    const response = await this.paymentMethodsRepository.delete(id);

    if (response.affected === 0) {
      throw new NotFoundException(`PaymentMethod with id ${id} not found`);
    }
  }
}
