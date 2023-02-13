import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FinancesHistoricService } from '../services/finances-historic.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateFinanceHistoricDto } from '../dto/create-finance-historic.dto';
import { UpdateFinanceHistoricDto } from '../dto/udate-finance-historic.dto';

@Controller('financesHistoric/historic')
@ApiTags('FinancesHistoric')
export class FinancesHistoricController {
  constructor(
    private readonly financesHistoricService: FinancesHistoricService,
  ) {}

  @Post()
  create(@Body() createFinanceDto: CreateFinanceHistoricDto) {
    return this.financesHistoricService.create(createFinanceDto);
  }

  @Get()
  findAll() {
    return this.financesHistoricService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financesHistoricService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFinanceHistoricDto: UpdateFinanceHistoricDto,
  ) {
    return this.financesHistoricService.update(+id, updateFinanceHistoricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financesHistoricService.remove(+id);
  }
}
