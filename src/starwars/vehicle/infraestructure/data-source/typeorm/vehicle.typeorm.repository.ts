import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { VehicleEntity } from "src/starwars/vehicle/domain/entities/vehicle.entity";
import { VehicleRepository } from "src/starwars/vehicle/domain/ports/vehicle.repository";
import { VehicleTypeOrmEntity } from "./entities/vehicle.typeorm.entity";
import { DataSource, Repository } from "typeorm";
import { PeopleCreateData } from "src/starwars/people/domain/ports/people-create-data";
import { PeopleEntity } from "src/starwars/people/domain/entities/people.entity";
import { CreateVehicleDto } from "../../dtos/create-vehicle.dto";
import { GetAllVehiclesQuery } from "../../dtos/get-all-vehicle.dto";

export class VehicleTypeORMRepository implements VehicleRepository {
  
    constructor(
      @InjectRepository(VehicleTypeOrmEntity, 'databaseStarwars')
      private vehicleRepository: Repository<VehicleEntity>,
      // private yourlsRepository: Repository<YourlsEntity>,
  
      @InjectDataSource('databaseStarwars')
      private readonly dataSource: DataSource,
  
    ){}
    
    async createPeople(payload: CreateVehicleDto): Promise<VehicleEntity> {
        try {
            const vehicle = await this.vehicleRepository.save(payload);
            return vehicle;

        } catch(err){
            console.log('err typeorm: ', err)
            throw err;
        }
    }

    async getAllVehicle(query: GetAllVehiclesQuery): Promise<VehicleEntity[]> {
        try {
            const whereConditions: any = {};
            if(query.name) whereConditions.name = query.name;
            if(query.model) whereConditions.model = query.model;
            const results = await this.vehicleRepository.find({
                where: whereConditions
            });
            return results;
        } catch(err) {
            console.log('err: ', err)
            throw err;
        }
    }

}