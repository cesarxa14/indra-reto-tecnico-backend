import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";


export class CreateVehicleDto {

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre es un string' })
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El modelo es obligatorio' })
  @IsString({ message: 'El modelo es un string' })
  model: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'La clase del vehiculo es obligatoria' })
  @IsString({ message: 'La clase del vehiculo es un string' })
  vehicle_class: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El fabricante del vehiculo es obligatoria' })
  @IsString({ message: 'El fabricante del vehiculo es un string' })
  manufacturer: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El largo del vehiculo es obligatoria' })
  @IsString({ message: 'El largo del vehiculo es un string' })
  length : string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El costo en creditos es obligatoria' })
  @IsString({ message: 'El costo en creditos es un string' })
  cost_in_credits: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El numero de personal es obligatoria' })
  @IsNumberString({}, { message: 'El numero de personal es un number string' })
  crew: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El numero de pasajeros es obligatoria' })
  @IsNumberString({},{ message: 'El numero de pasajeros es un number string' })
  passengers : string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El maximo de velocidad es obligatoria' })
  @IsNumberString({},{ message: 'El maximo de velocidad es un number string' })
  max_atmosphering_speed: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'La capacidad de carga es obligatoria' })
  @IsNumberString({},{ message: 'La capacidad de carga es un number string' })
  cargo_capacity: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'La capacidad de carga es obligatoria' })
  @IsNumberString({},{ message: 'La capacidad de carga es un number string' })
  consumables: string;




  @ApiProperty({
    description: 'An array of film resource URLs that this person has been in.',
    isArray: true,
    type: 'string',
    required: false,
  })
  @IsOptional()
  @IsArray({ message: 'El campo debe ser un array' })
  @ArrayNotEmpty({ message: 'El array no puede estar vacío si se incluye' }) 
  @IsString({ each: true, message: 'Cada elemento debe ser un string' })
  films: string[];

  @ApiProperty({
    description: 'An array of species resource URLs that this person belongs to.',
    isArray: true,
    type: 'string',
    required: false,
  })
  @IsOptional()
  @IsArray({ message: 'El campo debe ser un array' })
  @ArrayNotEmpty({ message: 'El array no puede estar vacío si se incluye' }) 
  @IsString({ each: true, message: 'Cada elemento debe ser un string' })
  pilots : string[];

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'La urles obligatoria' })
  @IsString({ message: 'La url es un string' })
  url: string;
   
}