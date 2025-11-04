/* eslint-disable prettier/prettier */

import { type Post as PostInterface } from './interfaces/posts.interface';
import { PostsService } from './posts.service';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }


    @Get()
    getAllPosts(@Query('title') title: string) {
        const posts = this.postsService.findAll();
        if (title) {
            return posts?.filter(post => post.title?.toLowerCase().includes(title.toLowerCase()))
        }
        return posts;
    }

    @Get(':id')
    getPost(@Param('id', ParseIntPipe) id: number) {
        return this.postsService.findOne(id)

    }

    @Post()
    createPost(@Body() post: PostInterface) {
        return this.postsService.create(post)
    }

}
