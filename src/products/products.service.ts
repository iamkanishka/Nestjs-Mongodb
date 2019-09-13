import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, desc: string, price: number) {
    const newProduct = new this.productModel({
      title: title,
      description: desc,
      price: price,
    });
    const result = await newProduct.save();
    console.log(result);
    return result.id as string;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map(prod => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price,
    }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  }

  async updateProduct(
    productId: string,
    title: string,
    desc: string,
    price: number,
  ) {
    const updatedproduct = await this.productModel.findProduct(productId);
    if (title) {
      updatedproduct.title = title;
    }
    if (desc) {
      updatedproduct.description = desc;
    }
    if (price) {
      updatedproduct.price = price;
    }
    updatedproduct.save();
  }

  async deleteProduct(prodId: string) {
  const result= await this.productModel.deleteOne({_id:prodId}).exec();    
  console.log(result); 
  if(result.n==0){
    throw new NotFoundException('Could not find product.');

  } 
}

  private async findProduct(id: string): Promise<Product> {
    var product;
    try {
      product = await this.productModel.findByid(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
