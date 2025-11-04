/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { GreetingModule } from './greeting/greeting.module';
import { TestsModule } from './tests/tests.module';
import { CustomersModule } from './customers/customers.module';
import { PostsModule } from './posts/posts.module';
import { ImagesModule } from './images/images.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [TestsModule, CustomersModule, PostsModule, ImagesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
