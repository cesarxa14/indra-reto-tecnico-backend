import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import PeopleController from "./infraestructure/controllers/people.controller";
import { PeopleService } from "./infraestructure/services/people.service";
import { PeopleApiRepository } from "./infraestructure/data-source/people-api/people-api.repository";
import { TypeOrmModule } from "@nestjs/typeorm";



@Module({
  imports: [
    HttpModule,
  ],
  controllers: [PeopleController],
  providers: [
    PeopleService,
    PeopleApiRepository
  ],
  exports: [PeopleService, PeopleApiRepository]
})
export class PeopleModule {}