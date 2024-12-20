import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { VehicleService } from "./vehicle.service";
import { Response } from "express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateVehicleDto } from "../dtos/create-vehicle.dto";


@ApiTags('Vehicles')
@Controller('vehicles')
export default class VehicleController {

  constructor(private readonly vehicleService: VehicleService){}

  @Get()
  @ApiOperation ({ summary: 'Obtiene todos los vehiculos' })
  @ApiResponse({ status: 200, description: 'Las vehiculos fueron traidas con éxito.' })
  @ApiResponse({ status: 400, description: 'Bad request' })
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

  @Post()
  @ApiOperation ({ summary: 'Crea un nuevo vehiculo' })
  @ApiResponse({ status: 200, description: 'El vehiculo se creó con éxito.' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async createVehicle(@Body() createVehicleDto: CreateVehicleDto,  @Res() res: Response){
    try {
      console.log('controller')
      const vehicleResult = await this.vehicleService.createVehicle(createVehicleDto);
      return res.status(HttpStatus.OK).json(vehicleResult);
      
    } catch(err) {
      console.log('err: ', err)
        
      return res.status(HttpStatus.BAD_REQUEST).json({errores:  err.message});
    }
  }
}