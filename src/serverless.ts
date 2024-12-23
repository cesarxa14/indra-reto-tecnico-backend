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
      .addServer('http://localhost:3000/dev/reto-tecnico-indra')
      .addServer('http://localhost:3000/prod/reto-tecnico-indra')
      // .addServer(`${process.env.API_URL}/reto-tecnico-indra`) 
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