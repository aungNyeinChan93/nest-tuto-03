/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
    greetingByName(name: string): string {
        return `Hello ${name}`
    }
}
