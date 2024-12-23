import { traslateGetPeople } from "src/utils/traslate-get-people";
import { PeopleCreateData } from "../domain/ports/people-create-data";
import { PeopleRepository } from "../domain/ports/people.repository";
import { CreatePeopleDto } from "../infraestructure/dtos/create-people.dto";
import { tranlationGetPeopleMap } from "./traslate/traslate-get-people";




export class PeopleUseCase {

  constructor(private peopleRepository: PeopleRepository){}

  /**
   * Obtener la lista de la entidad People de SWAPI
   * @returns 
   */
  async getAllPeople(){
    try {
      console.log('use case')
      const peopleResult = await this.peopleRepository.getAllPeople();
      // Traducimos los campos de la respuesta a español
      const translatedResponse = traslateGetPeople(peopleResult, tranlationGetPeopleMap);

      return translatedResponse;
  

    } catch(err) {
      console.log('err: ', err)
      throw err;
    }
  }

}