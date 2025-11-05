/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform, Scope } from "@nestjs/common";
import { AuthorsService } from "../authors.service";


@Injectable({ scope: Scope.DEFAULT })
export class AuthorExistPipe implements PipeTransform {

    constructor(private authorsService: AuthorsService) { }

    transform(value: any, _metadata: ArgumentMetadata) {
        try {
            this.authorsService.findOne(value as number)
        } catch (error) {
            console.log(error instanceof Error ? error?.message : 'server error in author module')
            throw new NotFoundException(`Author - ${value} is not found!`)
        }
        return value as number;
    }
}