import { traslateGetVehicle } from "src/utils/traslate-get-vehicles";
import { VehicleRepository } from "../domain/ports/vehicle.repository";
import { CreateVehicleDto } from "../infraestructure/dtos/create-vehicle.dto";
import { GetAllVehiclesQuery } from "../infraestructure/dtos/get-all-vehicle.dto";
import { tranlationGetVehicleMap } from "./traslate/traslate-get-vehicle";


export class VehicleUseCase {

    constructor(private vehicleRepository: VehicleRepository){}

    /**
     * Funcion que trae todos los vehiculos de nuestra DB
     * @param query
     * @returns 
     */
    async getAllVehicles(query: GetAllVehiclesQuery){
        try {
          console.log('use case', query)
          const vehicleResult = await this.vehicleRepository.getAllVehicle(query);
          console.log('peopleResult use case')
          // Traducimos los campos de la respuesta a español
          const translatedResponse = traslateGetVehicle(vehicleResult, tranlationGetVehicleMap);
          
          return translatedResponse;
    
        } catch(err) {
          console.log('err: ', err)
          throw err;
        }
    }

    /**
     * 
     * @param payload Funcion que crea un Vehiculo en nuestra DB
     * @returns 
     */
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