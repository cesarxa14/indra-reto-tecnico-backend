import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "src/shared/constants";
// import { PeopleTypeOrmEntity } from "src/starwars/people/infraestructure/data-source/people-api/typeorm/entities/people.typeorm.entity";
import { VehicleTypeOrmEntity } from "src/starwars/vehicle/infraestructure/data-source/typeorm/entities/vehicle.typeorm.entity";
import { VehicleTypeORMRepository } from "src/starwars/vehicle/infraestructure/data-source/typeorm/vehicle.typeorm.repository";

export const databaseStarwars: TypeOrmModuleOptions = {
    name: 'databaseStarwars',
    type: 'mysql',
    host: DB_HOST,
    port: parseInt(DB_PORT, 10),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [VehicleTypeOrmEntity],
    synchronize: true,
  };