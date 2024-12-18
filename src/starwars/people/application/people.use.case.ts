import { PeopleRepository } from "../domain/ports/people.repository";



export class PeopleUseCase {

  constructor(private peopleRepository: PeopleRepository){}

  async getAllPeople(){
    try {
      console.log('use case')
      const peopleResult = await this.peopleRepository.getAllPeople();
      console.log('peopleResult use case')
      return peopleResult;

    } catch(err) {
      console.log('err: ', err)
      throw err;
    }
  }
}