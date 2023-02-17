import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancesModule } from 'src/modules/finances/finances.module';
import { WeightsModule } from 'src/modules/weights/weights/weights.module';

import { GymModule } from '../modules/gym/gym.module';
import { AppController } from './app.controller';

import entities from './database/entities';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities,
      synchronize: true,
    }),
    GymModule,
    WeightsModule,
    FinancesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
