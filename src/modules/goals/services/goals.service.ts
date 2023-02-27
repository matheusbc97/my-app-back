import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGoalDto } from '../dto/create-goal.dto';
import { UpdateGoalDto } from '../dto/update-goal.dto';
import { Goal } from '../entities/goal.entity';

@Injectable()
export class GoalsService {
  constructor(
    @InjectRepository(Goal)
    private goalsRepository: Repository<Goal>,
  ) {}

  create(createGoalDto: CreateGoalDto) {
    return this.goalsRepository.save(createGoalDto);
  }

  findAll() {
    return this.goalsRepository.find();
  }

  async findOne(id: number) {
    const response = await this.goalsRepository.findOneBy({ id });

    if (response === null) {
      throw new NotFoundException(`Goal with id ${id} not found`);
    }

    return response;
  }

  update(id: number, updateGoalDto: UpdateGoalDto) {
    return this.goalsRepository.save({
      id,
      ...updateGoalDto,
    });
  }

  async remove(id: number) {
    const response = await this.goalsRepository.delete(id);

    if (response.affected === 0) {
      throw new NotFoundException(`Goal with id ${id} not found`);
    }
  }
}
