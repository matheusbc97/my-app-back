import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('App')
@ApiTags('App')
export class AppController {
  @Get()
  showAppVersion() {
    return '0.0.1';
  }
}
