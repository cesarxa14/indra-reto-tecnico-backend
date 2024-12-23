import { CreatePeopleDto } from "../../infraestructure/dtos/create-people.dto";
import { PeopleEntity } from "../entities/people.entity";
import { PeopleCreateData } from "./people-create-data";


export interface PeopleRepository {
  getAllPeople(): Promise<PeopleEntity[]>;

}