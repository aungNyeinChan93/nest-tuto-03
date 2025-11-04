/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ImagesService } from 'src/images/images.service';

@Injectable()
export class ProductsService {

  private products: CreateProductDto[] = [];

  constructor(private readonly imageService: ImagesService) { };

  create(createProductDto: CreateProductDto): CreateProductDto[] {
    const newProduct = { ...createProductDto, id: this.products?.length + 1, created_at: new Date() }
    this.products.push(newProduct)
    return this.products;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number): CreateProductDto {
    const product = this.products?.find(product => product?.id === id);
    if (!product) throw new NotFoundException('Product not found')
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const hasProduct = this.products?.findIndex(p => p?.id === id);
    if (hasProduct == -1) throw new NotFoundException('Product not Found!');
    // this.products = this.products?.map(p => p?.id === id ? { ...p, ...updateProductDto } : p)
    this.products[hasProduct] = { ...this.products[hasProduct], ...updateProductDto }
    return this.products[hasProduct];
  }

  remove(id: number) {
    const hasProduct = this.products?.find(p => p?.id === id);
    if (!hasProduct) throw new NotFoundException('Product not Found!');
    this.products = this.products?.filter(p => p.id !== id);
    return `Post - ${hasProduct?.name} was deleted!`;
  }

  testImage(file: File) {
    return this.imageService.uploadSingleImage('testing', file)
  }
}
