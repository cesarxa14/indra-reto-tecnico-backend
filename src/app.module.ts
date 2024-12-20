import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PeopleModule } from './starwars/people/people.module';
import { VehicleModule } from './starwars/vehicle/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseStarwars } from './config/database.config';

@Module({
  imports: [
    // PeopleModule
    TypeOrmModule.forRoot(databaseStarwars),
    VehicleModule
  ],
  controllers: [
    AppController],
  providers: [AppService],
})
export class AppModule {}
