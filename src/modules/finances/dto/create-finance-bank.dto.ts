import { ApiProperty } from '@nestjs/swagger';
import { BankTypeEnum } from '../enums/bank-type.enum';

export class CreateFinanceBankDto {
  @ApiProperty()
  name: string;

  @ApiProperty({
    enum: BankTypeEnum,
    default: BankTypeEnum.PERSONAL,
  })
  type: BankTypeEnum;
}
