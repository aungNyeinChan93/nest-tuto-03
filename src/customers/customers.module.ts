/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { GreetingModule } from 'src/greeting/greeting.module';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [
    // ConfigModu,
    GreetingModule
  ]
})
export class CustomersModule { }
