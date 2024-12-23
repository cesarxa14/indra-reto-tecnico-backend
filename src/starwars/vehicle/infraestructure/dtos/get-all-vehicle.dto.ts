import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class GetAllVehiclesQuery {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly name: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly model: string;
}