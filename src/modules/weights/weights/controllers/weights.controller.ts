import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WeightsService } from '../services/weights.service';
import { CreateWeightDto } from '../dto/create-weight.dto';
import { UpdateWeightDto } from '../dto/update-weight.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Weight } from '../entities/weight.entity';
import { GetWeightDto } from '../dto/get-weight.dto';

@Controller('weights')
@ApiTags('Weights')
export class WeightsController {
  constructor(private readonly weightsService: WeightsService) {}

  @Post()
  create(@Body() createWeightDto: CreateWeightDto) {
    return this.weightsService.create(createWeightDto);
  }

  @ApiOkResponse({
    type: GetWeightDto,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.weightsService.findAll();
  }

  @ApiOkResponse({
    type: GetWeightDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weightsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeightDto: UpdateWeightDto) {
    return this.weightsService.update(+id, updateWeightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weightsService.remove(+id);
  }
}
