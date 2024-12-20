import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { VehicleEntity } from "src/starwars/vehicle/domain/entities/vehicle.entity";
import { VehicleRepository } from "src/starwars/vehicle/domain/ports/vehicle.repository";
import { VehicleTypeOrmEntity } from "./entities/vehicle.typeorm.entity";
import { DataSource, Repository } from "typeorm";

export class VehicleTypeORMRepository implements VehicleRepository {
  
    constructor(
      @InjectRepository(VehicleTypeOrmEntity, 'databaseStarwars')
      private vehicleRepository: Repository<VehicleEntity>,
      // private yourlsRepository: Repository<YourlsEntity>,
  
      @InjectDataSource('databaseStarwars')
      private readonly dataSource: DataSource,
  
    ){}

    async getAllVehicle(): Promise<VehicleEntity[]> {
        try {
            const results = await this.vehicleRepository.find();
            return results;
        } catch(err) {
            console.log('err: ', err)
            throw err;
        }
    }

}