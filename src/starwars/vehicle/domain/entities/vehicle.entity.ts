export interface VehicleEntity {
    id?: string;
    name:string;
    model :string;
    vehicle_class:string;
    manufacturer:string;
    length:string;
    cost_in_credits:string;
    crew:string;
    passengers:string;
    max_atmosphering_speed:string;
    cargo_capacity:string;
    consumables:string;
    films:string[];
    pilots:string[];
    url:string;
    created:Date | string;
    edited:Date | string;
}