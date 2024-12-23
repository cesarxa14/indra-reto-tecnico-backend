import { PeopleCreateData } from "src/starwars/people/domain/ports/people-create-data";
import { VehicleEntity } from "../entities/vehicle.entity";
import { CreateVehicleDto } from "../../infraestructure/dtos/create-vehicle.dto";
import { GetAllVehiclesQuery } from "../../infraestructure/dtos/get-all-vehicle.dto";


export interface VehicleRepository {
    getAllVehicle(query: GetAllVehiclesQuery): Promise<VehicleEntity[]>;
    createPeople(payload: CreateVehicleDto): Promise<VehicleEntity>;
  
}