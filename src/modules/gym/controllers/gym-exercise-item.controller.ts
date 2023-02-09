import {
  Controller,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GymExerciseItemService } from '../services/gym-exercise-item.service';
import { UpdateGymExerciseItemDto } from '../dto/update-gym-exercise-item.dto';

@Controller('gym/exercises-items')
@ApiTags('Exercise Items')
export class GymExerciseItemController {
  constructor(
    private readonly gymExerciseItemService: GymExerciseItemService,
  ) {}

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGymExerciseItemDto: UpdateGymExerciseItemDto,
  ) {
    return this.gymExerciseItemService.update(+id, updateGymExerciseItemDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.gymExerciseItemService.remove(+id);
  }
}
