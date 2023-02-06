import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateGymExerciseDto } from '../dto/create-gym-exercise.dto';
import { GetGymExercisesQueryDto } from '../dto/get-gym-exercises-query.dto';
import { UpdateGymExerciseDto } from '../dto/update-gym-exercise.dto';
import { GymExerciseItem } from '../entities/gym-exercise-item.entity';
import { GymExercise } from '../entities/gym-exercise.entity';
import { GymTraining } from '../entities/gym-training.entity';

@Injectable()
export class GymExerciseService {
  constructor(
    @InjectRepository(GymExercise)
    private gymExerciseRepository: Repository<GymExercise>,
    @InjectRepository(GymExerciseItem)
    private gymExerciseItemRepository: Repository<GymExerciseItem>,
    @InjectRepository(GymTraining)
    private gymTrainingRepository: Repository<GymTraining>,
  ) {}

  async create(createGymExerciseDto: CreateGymExerciseDto) {
    const newGymExercise = new GymExercise();

    const training = await this.gymTrainingRepository.findOneBy({
      id: createGymExerciseDto.trainingId,
    });

    newGymExercise.training = training;
    const exercisesItems: GymExerciseItem[] = [];

    const promises = createGymExerciseDto.exercisesItems.map(async (item) => {
      const newExerciseItem = await this.gymExerciseItemRepository.save(item);
      exercisesItems.push(newExerciseItem);
    });

    await Promise.all(promises);

    newGymExercise.exercisesItems = exercisesItems;

    return this.gymExerciseRepository.save(newGymExercise);
  }

  findAll(getGymExercisesQueryDto: GetGymExercisesQueryDto) {
    const options: FindManyOptions<GymExercise> = {
      relations: ['exercisesItems'],
    };

    if (getGymExercisesQueryDto.trainingId) {
      options.where = { training: { id: getGymExercisesQueryDto.trainingId } };
    }

    return this.gymExerciseRepository.find(options);
  }

  findOne(id: number) {
    return `This action returns a #${id} gym`;
  }

  async update(id: number, updateGymExerciseDto: UpdateGymExerciseDto) {
    const gymExercise = new GymExercise();
    gymExercise.id = id;

    const exercisesItems: GymExerciseItem[] = [];

    const promises = updateGymExerciseDto.exercisesItems.map(async (item) => {
      if (item.id) {
        await this.gymExerciseItemRepository.update(item.id, item);

        const response = await this.gymExerciseItemRepository.findOneBy({
          id: item.id,
        });

        exercisesItems.push(response);
      } else {
        const newExerciseItem = await this.gymExerciseItemRepository.save(item);
        exercisesItems.push(newExerciseItem);
      }
    });

    await Promise.all(promises);

    gymExercise.exercisesItems = exercisesItems;

    await this.gymExerciseRepository.save(gymExercise);
  }

  async remove(id: number) {
    const response = await this.gymExerciseRepository.delete(id);

    if (response.affected === 0) {
      throw new NotFoundException(`Gym training with id ${id} not found`);
    }
  }
}
