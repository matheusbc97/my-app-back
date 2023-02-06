import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/app.module';
import swaggerSetup from './core/swagger/swagger-setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swaggerSetup(app);

  await app.listen(21025);
}
bootstrap();
