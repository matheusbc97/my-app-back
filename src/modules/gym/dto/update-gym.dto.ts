import { ApiProperty } from '@nestjs/swagger';

export class UpdateGymTrainingDto {
  @ApiProperty()
  name: string;
}
