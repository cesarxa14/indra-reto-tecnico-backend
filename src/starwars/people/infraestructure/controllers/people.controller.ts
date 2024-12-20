import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { PeopleService } from "../services/people.service";
import { CreatePeopleDto } from "../dtos/create-people.dto";



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

  @Post()
  async createPeople(@Body() createDto: CreatePeopleDto, @Res() res: Response) {
    try {
      const newUrl = await this.peopleService.createPeople(createDto);

      // return res.status(HttpStatus.OK).json(createResponse('ok-create-update-item', newUrl));
    } catch (error) {
      // return res.status(HttpStatus.BAD_REQUEST).json(createResponse('errores', error.message));
    }
  }
}