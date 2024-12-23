import { Module } from '@nestjs/common';
import { AppService } from './app.service';
// import { PeopleModule } from './starwars/people/people.module';
import { VehicleModule } from './starwars/vehicle/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseStarwars } from './config/database.config';
import { PeopleModule } from './starwars/people/people.module';

@Module({
  imports: [
    // PeopleModule
    TypeOrmModule.forRoot(databaseStarwars),
    VehicleModule,
    PeopleModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
