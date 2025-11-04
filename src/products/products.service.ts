/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ImagesService } from 'src/images/images.service';

@Injectable()
export class ProductsService {

  private readonly products: CreateProductDto[] = [];

  constructor(private readonly imageService: ImagesService) { };

  create(createProductDto: Omit<CreateProductDto, 'id'>): CreateProductDto[] {
    const newProduct = { ...createProductDto, id: this.products?.length + 1, created_at: new Date() }
    this.products.push(newProduct)
    return this.products;
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  testImage(file: File) {
    return this.imageService.uploadSingleImage('testing', file)
  }
}
