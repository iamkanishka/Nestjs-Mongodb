import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule,MongooseModule.forRoot('mongodb+srv://kanishkahotshot:gtL3XR9weTNz3MV2@cluster0-eck6u.mongodb.net/mongodbcrud?retryWrites=true&w=majority'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
