import { ApiProperty } from '@nestjs/swagger';

export class CreateGoalDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  priority: number;
}
