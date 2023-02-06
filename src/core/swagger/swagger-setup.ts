import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import swaggerConfig from './swagger-config';

export default function swaggerSetup(app: INestApplication) {
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
}
