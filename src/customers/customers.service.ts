/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { GreetingService } from 'src/greeting/greeting.service';

@Injectable()
export class CustomersService {

  private customers: CreateCustomerDto[] = [];

  constructor(private readonly greetingService: GreetingService) { }

  create(createCustomerDto: CreateCustomerDto) {
    this.customers?.push({ ...createCustomerDto, id: this.customers?.length + 1 })
    return this.customers;
  }

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    return this.customers.find(c => c?.id === id);
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }


  firstTimeWelcome(id: number) {
    const customer: CreateCustomerDto | undefined = this.customers.find(customer => customer?.id == id)
    if (!customer) {
      return 'user not found!';
    }
    return this.greetingService.greetingByName(customer?.name);
  }
}
