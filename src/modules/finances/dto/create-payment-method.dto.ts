import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentMethodDto {
  id: number;

  @ApiProperty()
  name: string;
}
