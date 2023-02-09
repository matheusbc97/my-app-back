import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWeightDto } from '../dto/create-weight.dto';
import { UpdateWeightDto } from '../dto/update-weight.dto';
import { Weight } from '../entities/weight.entity';

@Injectable()
export class WeightsService {
  constructor(
    @InjectRepository(Weight)
    private weightsRepository: Repository<Weight>,
  ) {}

  create(createWeightDto: CreateWeightDto) {
    return this.weightsRepository.save(createWeightDto);
  }

  findAll() {
    return this.weightsRepository.find();
  }

  findOne(id: number) {
    return this.weightsRepository.findOneBy({ id });
  }

  update(id: number, updateWeightDto: UpdateWeightDto) {
    return this.weightsRepository.save({
      id,
      ...updateWeightDto,
    });
  }

  remove(id: number) {
    return this.weightsRepository.delete(id);
  }
}
