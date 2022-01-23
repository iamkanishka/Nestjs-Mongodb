import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';


import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { productSchema } from './product.model';

@Module({
    imports:[MongooseModule.forFeature([{name:'Product',schema:productSchema}])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
