
import { VehicleEntity } from "src/starwars/vehicle/domain/entities/vehicle.entity";
import { EntitySchema } from "typeorm";


export const  VehicleTypeOrmEntity = new EntitySchema<VehicleEntity>({
  name: 'Vehicle', 
  tableName: 'vehicles',
  columns: {
        id: {
        primary: true,
            type: "int",
        generated: true,
        },
        name: {
            type: "varchar"
        },
        model: {
            type: "varchar"
        },
        vehicle_class: {
            type: "varchar"
        },
        manufacturer: {
            type: "varchar"
        },
        length: {
            type: "varchar"
        },
        cost_in_credits: {
            type: "varchar"
        },
        crew: {
            type: "varchar"
        },
        passengers: {
            type: "varchar"
        },
        max_atmosphering_speed: {
            type: "varchar"
        },
        cargo_capacity: {
            type: "varchar"
        },
        consumables: {
            type: "varchar"
        },
        films: {
            type: "varchar"
        },
        pilots: {
            type: "varchar"
        },
        url: {
            type: "varchar"
        },
        created: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP'
        },
        edited: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP'
        }

     
    }
})