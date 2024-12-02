import { Injectable } from "@angular/core";
import { productRepo } from "../../infrastructure/repository/product.repo";
import { IProduct } from "../../domain/models/interfaces/product/IProduct";

@Injectable({
    providedIn: 'root'
})
export class UpdateProductCommand{
    constructor(private produRepo: productRepo){}

    async run(product: IProduct): Promise<void>{
        try{
            await this.produRepo.updateProduct(product)
        } catch(err){
            console.error(err)
            throw new Error('Failed to update product')
        }
        
    }
}