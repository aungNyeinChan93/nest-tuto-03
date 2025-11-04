/* eslint-disable prettier/prettier */
export class CreateCustomerDto {
    id?: number;
    name: string;
    email: string;
    type: 'gold' | 'silver' | 'diamond';
    age: number;
    location: string;
    avator?: string
}
