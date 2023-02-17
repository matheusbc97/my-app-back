import { ApiProperty } from '@nestjs/swagger';

export class CreateFinanceNoteDto {
  @ApiProperty()
  description?: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  amount: number;
}
