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
import { CreateFinanceNoteDto } from '../dto/create-finance-note.dto';
import { UpdateFinanceNoteDto } from '../dto/update-finance-note.dto';
import { FinancesNotesService } from '../services/finances-notes.service';

@Controller('finances-notes')
@ApiTags('Finances Notes')
export class FinancesNotesController {
  constructor(private readonly financesNotesService: FinancesNotesService) {}

  @Post()
  create(@Body() createFinanceNoteDto: CreateFinanceNoteDto) {
    return this.financesNotesService.create(createFinanceNoteDto);
  }

  @Get()
  findAll() {
    return this.financesNotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financesNotesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFinanceNoteDto: UpdateFinanceNoteDto,
  ) {
    return this.financesNotesService.update(+id, updateFinanceNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financesNotesService.remove(+id);
  }
}
