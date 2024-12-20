import { IsNotEmpty, IsString } from "class-validator";

export class CreatePeopleDto {

    @IsNotEmpty({ message: 'El nombre obligatorio' })
    @IsString({ message: 'El ID del proyecto debe ser un número válido' })
    name: string;

    @IsNotEmpty({ message: 'El nombre obligatorio' })
    @IsString({ message: 'El ID del proyecto debe ser un número válido' })
    birth_year: string;

    @IsNotEmpty({ message: 'El nombre obligatorio' })
    @IsString({ message: 'El ID del proyecto debe ser un número válido' })
    eye_color: string;

    @IsNotEmpty({ message: 'El nombre obligatorio' })
    @IsString({ message: 'El ID del proyecto debe ser un número válido' })
    gender: string;

    @IsNotEmpty({ message: 'El nombre obligatorio' })
    @IsString({ message: 'El ID del proyecto debe ser un número válido' })
    hair_color: string;

    @IsNotEmpty({ message: 'El nombre obligatorio' })
    @IsString({ message: 'El ID del proyecto debe ser un número válido' })
    height: string;

    @IsNotEmpty({ message: 'El nombre obligatorio' })
    @IsString({ message: 'El ID del proyecto debe ser un número válido' })
    mass: string;

    @IsNotEmpty({ message: 'El nombre obligatorio' })
    @IsString({ message: 'El ID del proyecto debe ser un número válido' })
    skin_color: string;

    @IsNotEmpty({ message: 'El nombre obligatorio' })
    @IsString({ message: 'El ID del proyecto debe ser un número válido' })
    homeworld: string;

    @IsNotEmpty({ message: 'El nombre obligatorio' })
    @IsString({ message: 'El ID del proyecto debe ser un número válido' })
    url: string;

    @IsNotEmpty({ message: 'El nombre obligatorio' })
    @IsString({ message: 'El ID del proyecto debe ser un número válido' })
    films: string;
   

}