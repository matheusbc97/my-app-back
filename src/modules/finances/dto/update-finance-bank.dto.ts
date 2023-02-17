import { ApiProperty } from '@nestjs/swagger';
import { BankTypeEnum } from '../enums/bank-type.enum';

export class UpdateFinanceBankDto {
  @ApiProperty()
  name: string;

  @ApiProperty({
    enum: BankTypeEnum,
    default: BankTypeEnum.PERSONAL,
  })
  type: BankTypeEnum;
}
