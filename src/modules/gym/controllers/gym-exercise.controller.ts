import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Query,
} from '@nestjs/common';
import { GymExerciseService } from '../services/gym-exercise.service';
import { CreateGymExerciseDto } from '../dto/create-gym-exercise.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetGymExerciseDto } from '../dto/get-gym-exercise.dto';
import { UpdateGymExerciseDto } from '../dto/update-gym-exercise.dto';
import { GetGymExercisesQueryDto } from '../dto/get-gym-exercises-query.dto';

@Controller('gym/exercises')
@ApiTags('Exercises')
export class GymExerciseController {
  constructor(private readonly gymExerciseService: GymExerciseService) {}

  @Post()
  create(@Body() createGymExerciseDto: CreateGymExerciseDto) {
    return this.gymExerciseService.create(createGymExerciseDto);
  }

  @ApiOkResponse({
    type: GetGymExerciseDto,
    isArray: true,
  })
  @Get()
  findAll(@Query() getGymExercisesQueryDto: GetGymExercisesQueryDto) {
    return this.gymExerciseService.findAll(getGymExercisesQueryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gymExerciseService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGymExerciseDto: UpdateGymExerciseDto,
  ) {
    return this.gymExerciseService.update(+id, updateGymExerciseDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.gymExerciseService.remove(+id);
  }
}
