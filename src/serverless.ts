import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Handler } from 'express';
import serverlessExpress from '@codegenie/serverless-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

let server: Handler;
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
  
    app.enableCors();

    // ADDING SWAGGER
    const config = new DocumentBuilder()
      .setTitle('Documentacion API Reto Tecnico')
      .setDescription('En este documento Swagger listaré los endpoints desarrollados para la prueba')
      .addServer(process.env.SERVER_URL)
     
      .setVersion('1.0')
      .addTag('Vehicles')
      .addTag('People-Swapi')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('documentation', app, document);
    // END SETUP SWAGGER

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