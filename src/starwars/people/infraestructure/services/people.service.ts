import { Injectable } from "@nestjs/common";
import { PeopleUseCase } from "../../application/people.use.case";
import { PeopleApiRepository } from "../data-source/people-api/people-api.repository";



@Injectable()
export class PeopleService {

  private peopleUseCase: PeopleUseCase;
  constructor(starWarRepository: PeopleApiRepository){
    this,this.peopleUseCase = new PeopleUseCase(starWarRepository);
  }

  async getAllPeople(){
    console.log('service')
    return await this.peopleUseCase.getAllPeople();
  }
}