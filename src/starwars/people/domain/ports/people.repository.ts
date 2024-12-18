import { PeopleEntity } from "../entities/people.entity";


export interface PeopleRepository {
  getAllPeople(): Promise <PeopleEntity[]>;
}