/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { GreetingService } from 'src/greeting/greeting.service';

@Injectable()
export class TestsService {
    constructor(private greetingService: GreetingService) { }

    greetingByName(name: string): string {
        return this.greetingService.greetingByName(name)
    }
}