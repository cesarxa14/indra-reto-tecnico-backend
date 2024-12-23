// import { PeopleEntity } from "src/starwars/people/domain/entities/people.entity";
// import { EntitySchema } from "typeorm";


// export const  PeopleTypeOrmEntity = new EntitySchema<PeopleEntity>({
//   name: 'People', 
//   tableName: 'people',
//   columns: {
//         id: {
//         primary: true,
//             type: "int",
//         generated: true,
//         },
//         name: {
//             type: "string"
//         },
//         birth_year: {
//             type: "string"
//         },
//         eye_color : {
//             type: "string"
//         },
//         gender: {
//             type: "string"
//         },
//         hair_color: {
//             type: "string"
//         },
//         height: {
//             type: "string"
//         },
//         mass: {
//             type: "string"
//         },
//         skin_color: {
//             type: "string"
//         },
//         homeworld: {
//             type: "string"
//         },
//         films: {
//             type: "string"
//         },
//         url: {
//             type: "string"
//         },
//         created: {
//             type: 'timestamp',
//             default: () => 'CURRENT_TIMESTAMP'
//         },
//         edited: {
//             type: 'timestamp',
//             default: () => 'CURRENT_TIMESTAMP'
//         }

     
//     }
// })