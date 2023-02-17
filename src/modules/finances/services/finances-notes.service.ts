import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFinanceNoteDto } from '../dto/create-finance-note.dto';
import { UpdateFinanceNoteDto } from '../dto/update-finance-note.dto';
import { FinanceNote } from '../entities/finance-note.entity';

@Injectable()
export class FinancesNotesService {
  constructor(
    @InjectRepository(FinanceNote)
    private financesNotesRepository: Repository<FinanceNote>,
  ) {}

  create(params: CreateFinanceNoteDto) {
    return this.financesNotesRepository.save(params);
  }

  findAll() {
    return this.financesNotesRepository.find();
  }

  async findOne(id: number) {
    const response = await this.financesNotesRepository.findOneBy({ id });

    if (response === null) {
      throw new NotFoundException(`Finance Note with id ${id} not found`);
    }

    return response;
  }

  update(id: number, updateFinanceNoteDto: UpdateFinanceNoteDto) {
    return this.financesNotesRepository.save({
      id,
      ...updateFinanceNoteDto,
    });
  }

  async remove(id: number) {
    const response = await this.financesNotesRepository.delete(id);

    if (response.affected === 0) {
      throw new NotFoundException(`Finance Note with id ${id} not found`);
    }
  }
}
