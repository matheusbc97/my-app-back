import { ApiProperty } from '@nestjs/swagger';

export class CreateGymTrainingDto {
  @ApiProperty()
  name: string;
}
