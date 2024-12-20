import { VehicleRepository } from "../domain/ports/vehicle.repository";


export class VehicleUseCase {

    constructor(private vehicleRepository: VehicleRepository){}

    async getAllVehicles(){
        try {
          console.log('use case')
          const peopleResult = await this.vehicleRepository.getAllVehicle();
          console.log('peopleResult use case')
          return peopleResult;
    
        } catch(err) {
          console.log('err: ', err)
          throw err;
        }
      }

}