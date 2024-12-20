import { Injectable } from "@nestjs/common";
import { VehicleUseCase } from "../../application/vehicle.use.case";
import { VehicleTypeORMRepository } from "../data-source/typeorm/vehicle.typeorm.repository";


@Injectable()
export class VehicleService {

  private vehicleUseCase: VehicleUseCase;
  constructor(vehicleRepository: VehicleTypeORMRepository){
    this,this.vehicleUseCase = new VehicleUseCase(vehicleRepository);
  }

  async getAllVehicle(){
    console.log('service')
    return await this.vehicleUseCase.getAllVehicles();
  }
}