import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetFinancesByMonthParamsDto } from '../dto/get-finances-by-month-params.dto';
import { FinancesByMonthService } from '../services/finances-by-month.service';

@Controller('finances/month')
@ApiTags('Finances By Month')
export class FinancesByMonthController {
  constructor(private readonly financesService: FinancesByMonthService) {}

  @Get()
  findAll(@Param() params: GetFinancesByMonthParamsDto) {
    return this.financesService.findByMonth(params);
  }
}