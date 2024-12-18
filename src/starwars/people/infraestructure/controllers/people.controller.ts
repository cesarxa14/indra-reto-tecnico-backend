import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";
import { PeopleService } from "../services/people.service";



@Controller('people')
export default class PeopleController {

  constructor(private readonly peopleService: PeopleService){}

  @Get()
  async getAllPeople(@Res() res: Response){
    try {
      console.log('controller')
      const peopleResult = await this.peopleService.getAllPeople();
      console.log('regreso')
      return res.status(HttpStatus.OK).json(peopleResult);
      
    } catch(err) {
      console.log('err: ', err)
      return res.status(HttpStatus.BAD_REQUEST).json({errores:  err.message});
    }
  }
}