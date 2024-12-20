import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VehicleTypeOrmEntity } from "./infraestructure/data-source/typeorm/entities/vehicle.typeorm.entity";
import VehicleController from "./infraestructure/api/vehicle.controller";
import { VehicleService } from "./infraestructure/api/vehicle.service";
import { VehicleTypeORMRepository } from "./infraestructure/data-source/typeorm/vehicle.typeorm.repository";

@Module({
    imports: [
  
      TypeOrmModule.forFeature([VehicleTypeOrmEntity], 'databaseStarwars'),

    ],
    controllers: [VehicleController],
    providers: [
      VehicleService, 
      VehicleTypeORMRepository,
      // YourlsServices
    ],
    exports: [VehicleService, VehicleTypeORMRepository],
  
  })
  export class VehicleModule {}
  