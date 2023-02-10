import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FinancesService } from '../services/finances.service';
import { CreateFinanceDto } from '../dto/create-finance.dto';
import { UpdateFinanceDto } from '../dto/update-finance.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('finances')
@ApiTags('Finances')
export class FinancesController {
  constructor(private readonly financesService: FinancesService) {}

  @Post()
  create(@Body() createFinanceDto: CreateFinanceDto) {
    return this.financesService.create(createFinanceDto);
  }

  @Get()
  findAll() {
    return this.financesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinanceDto: UpdateFinanceDto) {
    return this.financesService.update(+id, updateFinanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financesService.remove(+id);
  }
}
