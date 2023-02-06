import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGymTrainingDto } from '../dto/create-gym-training.dto';
import { UpdateGymTrainingDto } from '../dto/update-gym.dto';
import { GymTrainingService } from '../services/gym-training.service';

@Controller('gym/trainings')
@ApiTags('Trainings')
export class GymTrainingController {
  constructor(private readonly gymTrainingService: GymTrainingService) {}

  @Post()
  create(@Body() createGymTrainingDto: CreateGymTrainingDto) {
    return this.gymTrainingService.create(createGymTrainingDto);
  }

  @Get()
  findAll() {
    return this.gymTrainingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gymTrainingService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(204)
  update(
    @Param('id') id: string,
    @Body() updateGymTrainingDto: UpdateGymTrainingDto,
  ) {
    return this.gymTrainingService.update(+id, updateGymTrainingDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.gymTrainingService.remove(+id);
  }
}
