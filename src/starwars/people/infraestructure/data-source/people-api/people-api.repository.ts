import { HttpService } from "@nestjs/axios";
// import axios, { AxiosInstance } from "axios";
import { STARWARS_API_URL } from "src/shared/constants";
import { PeopleEntity } from "src/starwars/people/domain/entities/people.entity";
import { PeopleRepository } from "src/starwars/people/domain/ports/people.repository";
import axios from 'axios';

export class PeopleApiRepository implements PeopleRepository {

  private url = STARWARS_API_URL + '/people';

  constructor(){
    // this.axiosInstance = axios.create({
    //   baseURL: STARWARS_API_URL, // URL base de la API de Star Wars
    //   timeout: 5000, // Tiempo de espera para las solicitudes
    // });
  }
  async getAllPeople(): Promise<PeopleEntity[]> {
    try{
      console.log('url: ', this.url)
      const response = await axios.get(this.url);
      console.log('reponse api')
      return response.data.results;
    } catch(err){
      console.log('err: ', err)
      throw err;
    }
  }


}