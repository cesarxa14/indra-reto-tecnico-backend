import { HttpService } from "@nestjs/axios";
// import axios, { AxiosInstance } from "axios";
import { STARWARS_API_URL } from "src/shared/constants";
import { PeopleEntity } from "src/starwars/people/domain/entities/people.entity";
import { PeopleRepository } from "src/starwars/people/domain/ports/people.repository";
import axios from 'axios';
import { ResponseAxiosPeopliApi } from "../../dtos/response-axios-people.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { PeopleTypeOrmEntity } from "./typeorm/entities/people.typeorm.entity";
import { Repository } from "typeorm";
import { CreatePeopleDto } from "../../dtos/create-people.dto";
import { PeopleCreateData } from "src/starwars/people/domain/ports/people-create-data";

export class PeopleApiRepository implements PeopleRepository {

  private url = STARWARS_API_URL + '/people';

  constructor(
    @InjectRepository(PeopleTypeOrmEntity)
    private peopleRepository: Repository<PeopleEntity>,
  ){

  }
  async createPeople(payload: PeopleCreateData): Promise<PeopleEntity> {
    try {
      const urlSaved = await this.peopleRepository.save(payload);
      console.log('urlSaved', urlSaved)
      return null;
    } catch(err) {
      console.log(err)
      throw err;
    }
  }
  async getAllPeople(): Promise<PeopleEntity[]> {
    try{
      console.log('url: ', this.url)
      const response = await axios.get<ResponseAxiosPeopliApi>(this.url);
      // console.log('reponse api', response)
      return response.data.results;
    } catch(err){
      console.log('err: ', err)
      throw err;
    }
  }


}