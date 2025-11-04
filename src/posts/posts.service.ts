/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { type Post as PostInterface } from './interfaces/posts.interface';

@Injectable()
export class PostsService {

    private posts: PostInterface[] = [];

    findAll(): PostInterface[] {
        return this.posts;
    }

    findOne(id: number): PostInterface | string {

        const post = this.posts?.find(post => post?.id === id);
        if (!post) {
            return 'post not found';
        }
        return post
    }

    create(post: PostInterface): PostInterface[] {
        const newPost = { id: this.posts?.length + 1, ...post }
        this.posts.push(newPost);
        return this.posts;
    }

}
