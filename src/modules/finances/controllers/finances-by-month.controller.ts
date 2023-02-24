import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FinanceByMonthDto } from '../dto/finance-by-month.dto';
import { GetFinancesByMonthParamsDto } from '../dto/get-finances-by-month-params.dto';
import { FinancesByMonthService } from '../services/finances-by-month.service';

@Controller('finances-month')
@ApiTags('Finances By Month')
export class FinancesByMonthController {
  constructor(private readonly financesService: FinancesByMonthService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: FinanceByMonthDto,
  })
  findAll(
    @Query()
    params: GetFinancesByMonthParamsDto,
  ) {
    return this.financesService.findByMonth(params);
  }
}
