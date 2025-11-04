/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { ProductsService } from "../products.service";


@Injectable()
export class ProdcustExistPipe implements PipeTransform {

    constructor(private productsService: ProductsService) { };

    transform(value: any, metadata: ArgumentMetadata) {
        try {
            this.productsService.findOne(value as number)
        } catch (error) {
            throw new NotFoundException(`Product - ${value} not found!`);
        };
        // return (Number(value) - 1);
        return value as number;
    }

} 
