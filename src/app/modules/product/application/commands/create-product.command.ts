import { Injectable } from "@angular/core";
import { productRepo } from "../../infrastructure/repository/product.repo";
import { IProduct } from "../../domain/models/interfaces/product/IProduct";

@Injectable({
    providedIn: 'root',
})
export class CreateProductCommand{
    constructor(private produRepo: productRepo){}

    async run(product: IProduct): Promise<void>{
        await this.produRepo.createProduct(product);
    }

}
