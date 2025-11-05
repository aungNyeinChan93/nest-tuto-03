/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { authors, CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  private authors: CreateAuthorDto[] = authors;

  create(createAuthorDto: CreateAuthorDto): CreateAuthorDto[] {
    const newAuthor = { ...createAuthorDto, id: this.authors?.length + 1, created_at: new Date().toISOString() };
    this.authors.push(newAuthor);
    return this.authors;
  }

  findAll() {
    return this.authors;
  }

  findOne(id: number): CreateAuthorDto {
    const author = this.authors.find(a => a?.id === id);
    if (!author) throw new NotFoundException(`Author not Found!`);
    return author;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto): CreateAuthorDto {
    const authorIndex = this.authors.findIndex(a => a?.id === id);
    if (authorIndex === -1) throw new NotFoundException('Author not found!');
    this.authors[authorIndex] = { ...this.authors[authorIndex], ...updateAuthorDto, };
    return this.authors[authorIndex];
  }

  remove(id: number) {
    const index = this.authors.findIndex(a => a?.id === id);
    if (index === -1) throw new NotFoundException('Author not found!');
    this.authors.splice(index, 1)
    return `Author - ${index} was successfully deleted!`
  }
}
