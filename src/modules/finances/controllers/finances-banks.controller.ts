import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFinanceBankDto } from '../dto/create-finance-bank.dto';
import { UpdateFinanceBankDto } from '../dto/update-finance-bank.dto';
import { FinancesBanksService } from '../services/finances-banks.service';

@Controller('finances-banks')
@ApiTags('Finances Banks')
export class FinancesBanksController {
  constructor(private readonly financesBanksService: FinancesBanksService) {}

  @Post()
  create(@Body() createFinanceBankDto: CreateFinanceBankDto) {
    return this.financesBanksService.create(createFinanceBankDto);
  }

  @Get()
  findAll() {
    return this.financesBanksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financesBanksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFinanceBankDto: UpdateFinanceBankDto,
  ) {
    return this.financesBanksService.update(+id, updateFinanceBankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financesBanksService.remove(+id);
  }
}
