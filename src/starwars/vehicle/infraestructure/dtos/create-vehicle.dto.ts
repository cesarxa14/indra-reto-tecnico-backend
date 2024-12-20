import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateVehicleDto {

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre es un string' })
  name: string;


  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El año de nacimiento es obligatorio' })
  @IsString({ message: 'El año de nacimiento es un string' })
  birth_year : string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El color de ojos es obligatorio' })
  @IsString({ message: 'El color de ojos es un string' })
  eye_color : string;

  @ApiProperty({ required: false })
  @IsOptional({ message: 'El genero es obligatorio' })
  @IsString({ message: 'El nombre es un string' })
  gender : string; // TODO: agregar un enum segun esta info:  The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El color de cabello es obligatorio' })
  @IsString({ message: 'El color de cabello es un string' })
  hair_color : string; // TODO: The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.


  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'La altura es obligatorio' })
  @IsString({ message: 'La altura es un string' })
  height  : string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El peso es obligatorio' })
  @IsString({ message: 'El peso es un string' })
  mass: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El color de piel es obligatorio' })
  @IsString({ message: 'El color de piel es un string' })
  skin_color: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'El nombre del planeta es obligatorio' })
  @IsString({ message: 'El nombre del planeta es un string' })
  homeworld : string;

  @ApiProperty({
    description: 'An array of film resource URLs that this person has been in.',
    isArray: true,
    type: String,
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
    type: String,
    required: false,
  })
  @IsOptional()
  @IsArray({ message: 'El campo debe ser un array' })
  @ArrayNotEmpty({ message: 'El array no puede estar vacío si se incluye' }) 
  @IsString({ each: true, message: 'Cada elemento debe ser un string' })
  species : string[];

   
}