import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule,MongooseModule.forRoot('mongodb+srv://kanishkanaik:hotshot@cluster0-eck6u.mongodb.net/mongodbcrud?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
