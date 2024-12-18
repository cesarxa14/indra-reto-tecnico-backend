import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Handler } from 'express';
import serverlessExpress from '@codegenie/serverless-express';

let server: Handler;
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
  
    app.enableCors();

    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();

    return serverlessExpress({app: expressApp})
  }catch (err) {
    console.log('err: ', err)
  }
  
}
// bootstrap();


export const handler: Handler = async (event, context, callback) => {
  server = server ?? (await bootstrap())
  return server(event, context, callback);
}