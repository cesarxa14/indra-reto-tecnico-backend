import { VehicleRepository } from "../domain/ports/vehicle.repository";
import { CreateVehicleDto } from "../infraestructure/dtos/create-vehicle.dto";
import { GetAllVehiclesQuery } from "../infraestructure/dtos/get-all-vehicle.dto";


export class VehicleUseCase {

    constructor(private vehicleRepository: VehicleRepository){}

    async getAllVehicles(query: GetAllVehiclesQuery){
        try {
          console.log('use case', query)
          const peopleResult = await this.vehicleRepository.getAllVehicle(query);
          console.log('peopleResult use case')
          return peopleResult;
    
        } catch(err) {
          console.log('err: ', err)
          throw err;
        }
    }

    async createVehicle(payload: CreateVehicleDto){
      try{
        console.log('use case')
        const newVehicle = await this.vehicleRepository.createPeople(payload);

        return newVehicle;
      } catch(err) {
        console.log('err: ', err)
        throw err;
      }
    }

}