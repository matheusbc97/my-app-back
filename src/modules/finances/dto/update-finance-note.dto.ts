import { ApiProperty } from '@nestjs/swagger';

export class UpdateFinanceNoteDto {
  @ApiProperty()
  description?: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  amount?: number;
}
