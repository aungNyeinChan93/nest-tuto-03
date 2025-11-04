/* eslint-disable prettier/prettier */
import { TestsService } from './tests.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('tests')
export class TestsController {
    constructor(private readonly testsService: TestsService) { }

    @Get('greetingByName')
    greetingByName(@Query('name') name: string) {
        return this.testsService.greetingByName(name);
    }

}
