/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorExistPipe } from './pipes/author.exist.pipe';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body(ValidationPipe) createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe, AuthorExistPipe) id: number) {
    return this.authorsService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.CREATED)
  update(@Param('id', ParseIntPipe, AuthorExistPipe) id: number, @Body(ValidationPipe) updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe, AuthorExistPipe) id: number) {
    return this.authorsService.remove(id);
  }
}
