/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty({ message: 'name field is required!' })
    name: string;


    @IsNotEmpty()
    price: number;

    // @IsDate()
    @IsOptional()
    created_at: Date;

    @IsOptional()
    updated_at?: Date;
}
