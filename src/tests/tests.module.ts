/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { GreetingModule } from 'src/greeting/greeting.module';

@Module({
  imports: [GreetingModule],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule { }
