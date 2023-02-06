import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGymTrainingDto } from '../dto/create-gym-training.dto';

import { UpdateGymTrainingDto } from '../dto/update-gym.dto';
import { GymTraining } from '../entities/gym-training.entity';

@Injectable()
export class GymTrainingService {
  constructor(
    @InjectRepository(GymTraining)
    private gymTrainingRepository: Repository<GymTraining>,
  ) {}

  create(createGymTrainingDto: CreateGymTrainingDto) {
    return this.gymTrainingRepository.save(createGymTrainingDto);
  }

  findAll() {
    return this.gymTrainingRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} gym`;
  }

  async update(id: number, updateGymTrainingDto: UpdateGymTrainingDto) {
    const response = await this.gymTrainingRepository.update(
      id,
      updateGymTrainingDto,
    );

    if (response.affected === 0) {
      throw new NotFoundException(`Gym training with id ${id} not found`);
    }
  }

  async remove(id: number) {
    const response = await this.gymTrainingRepository.delete(id);

    if (response.affected === 0) {
      throw new NotFoundException(`Gym training with id ${id} not found`);
    }
  }
}
