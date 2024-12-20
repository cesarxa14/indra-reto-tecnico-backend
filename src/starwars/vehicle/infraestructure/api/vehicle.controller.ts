import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { VehicleService } from "./vehicle.service";
import { Response } from "express";



@Controller('vehicles')
export default class VehicleController {

  constructor(private readonly vehicleService: VehicleService){}

  @Get()
  async getAllVehicles(@Res() res: Response){
    try {
      console.log('controller')
      const vehicleResult = await this.vehicleService.getAllVehicle();

    //   return vehicleResult;
    //   console.log('regreso')
      return res.status(HttpStatus.OK).json(vehicleResult);
      
    } catch(err) {
      console.log('err: ', err)
        
      return res.status(HttpStatus.BAD_REQUEST).json({errores:  err.message});
    }
  }
}