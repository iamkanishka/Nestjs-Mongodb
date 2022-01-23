import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const productSchema=new mongoose.Schema({
  title:{type:String,required:true},
  description:{type:String,required:true},
  price:{type:Number,required:true},
});





export interface Product extends Document{
 
     id: string;
     title: string;
     description: string;
     price: number;
  
}
