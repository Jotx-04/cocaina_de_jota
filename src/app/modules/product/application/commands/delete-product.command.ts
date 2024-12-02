import { Injectable } from "@angular/core";
import { productRepo } from "../../infrastructure/repository/product.repo";
import { IProduct } from "../../domain/models/interfaces/product/IProduct";

@Injectable({
    providedIn: 'root'
})
export class DeleteProductCommand{
    constructor(private produRepo: productRepo){}

    async run(product: IProduct): Promise<void>{
        await this.produRepo.deleteProduct(product.id);
    }
}