/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto'
import path from 'node:path';

@Injectable()
export class ImagesService {
    constructor() { };

    uploadSingleImage(to: string, file: File) {
        const fileName = `${randomUUID()}-${file ? file.name : undefined
            }`;
        const filePath = path.join(process.cwd(), 'public', to, fileName)
        // console.log(fileName, filePath)
        return { fileName, filePath }
    }
}
