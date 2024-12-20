import { VehicleEntity } from "../entities/vehicle.entity";


export interface VehicleRepository {
    getAllVehicle(): Promise<VehicleEntity[]>;
    // createPeople(payload: PeopleCreateData): Promise<PeopleEntity>;
  
}