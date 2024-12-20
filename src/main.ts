import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Handler } from 'express';
import serverlessExpress from 'serverless';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('test/reto-tecnico-indra');
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors();
  await app.listen(3000);
}


bootstrap();