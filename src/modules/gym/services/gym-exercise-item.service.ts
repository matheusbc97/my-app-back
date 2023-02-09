import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateGymExerciseItemDto } from '../dto/update-gym-exercise-item.dto';
import { GymExerciseItem } from '../entities/gym-exercise-item.entity';

@Injectable()
export class GymExerciseItemService {
  constructor(
    @InjectRepository(GymExerciseItem)
    private gymExerciseItemRepository: Repository<GymExerciseItem>,
  ) {}

  async update(
    id: number,
    updateGymExerciseDto: Omit<UpdateGymExerciseItemDto, 'id'>,
  ) {
    const response = await this.gymExerciseItemRepository.update(
      id,
      updateGymExerciseDto,
    );

    if (response.affected === 0) {
      throw new NotFoundException(`Gym exercise item with id ${id} not found`);
    }
  }

  async remove(id: number) {
    const response = await this.gymExerciseItemRepository.delete(id);

    if (response.affected === 0) {
      throw new NotFoundException(`Gym exercise item with id ${id} not found`);
    }
  }
}
