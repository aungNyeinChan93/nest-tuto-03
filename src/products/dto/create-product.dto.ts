/* eslint-disable prettier/prettier */
export class CreateProductDto {
    id?: number;
    name: string;
    price: number;
    created_at: Date;
    updated_at?: Date;
}
