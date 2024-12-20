import { PeopleCreateData } from "../domain/ports/people-create-data";
import { PeopleRepository } from "../domain/ports/people.repository";
import { CreatePeopleDto } from "../infraestructure/dtos/create-people.dto";



export class PeopleUseCase {

  constructor(private peopleRepository: PeopleRepository){}

  async getAllPeople(){
    try {
      console.log('use case')
      const peopleResult = await this.peopleRepository.getAllPeople();
      console.log('results', peopleResult)
      console.log('peopleResult use case')
      return peopleResult;

    } catch(err) {
      console.log('err: ', err)
      throw err;
    }
  }

  async createPeople(payload: CreatePeopleDto) {
    try{
      // const newPayload: PeopleCreateData = {...payload}
      // const createPeople = await this.peopleRepository.createPeople(newPayload)
    } catch(err) {
      console.log('err: ', err)
      throw err;
    }
  }
}