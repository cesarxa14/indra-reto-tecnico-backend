import { Injectable } from "@nestjs/common";
import { VehicleUseCase } from "../../application/vehicle.use.case";
import { VehicleTypeORMRepository } from "../data-source/typeorm/vehicle.typeorm.repository";
import { CreateVehicleDto } from "../dtos/create-vehicle.dto";


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

  async createVehicle(payload: CreateVehicleDto) {
    return await this.vehicleUseCase.createVehicle(payload);
  }
}