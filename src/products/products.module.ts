/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ImagesModule } from 'src/images/images.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [ImagesModule]
})
export class ProductsModule { }
