import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FinancesPaymentService } from '../services/finances-historic.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateFinancePaymentDto } from '../dto/create-finance-payment.dto';
import { UpdateFinancePaymentDto } from '../dto/update-finance-payment.dto';

@Controller('finances-payments')
@ApiTags('Finances Payment')
export class FinancesPaymentController {
  constructor(
    private readonly financesPaymentsService: FinancesPaymentService,
  ) {}

  @Post()
  create(@Body() createFinanceDto: CreateFinancePaymentDto) {
    return this.financesPaymentsService.create(createFinanceDto);
  }

  @Get()
  findAll() {
    return this.financesPaymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financesPaymentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFinancePaymentDto: UpdateFinancePaymentDto,
  ) {
    return this.financesPaymentsService.update(+id, updateFinancePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financesPaymentsService.remove(+id);
  }
}
