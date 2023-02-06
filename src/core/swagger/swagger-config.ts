import { DocumentBuilder } from '@nestjs/swagger';

export default new DocumentBuilder()
  .setTitle('My App API')
  //.setDescription('The cats API description')
  .setVersion('1.0')
  .build();
