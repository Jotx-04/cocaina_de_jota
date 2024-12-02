import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IProduct } from "../../domain/models/interfaces/product/IProduct";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class productRepo{
    private collection = this.firestore.collection<IProduct>('products');

    constructor(private firestore: AngularFirestore){}

    async createProduct(product: IProduct): Promise<string>{
        const docRef = await this.collection.add(product);
        const productID = docRef.id;
        return productID;
    }

    getAll(): Observable<IProduct[]>{
        return this.collection.valueChanges();
    }

    async getById(productID: string): Promise<IProduct | undefined>{
        const doc = await this.collection.doc(productID).get().toPromise();

        if(!doc || !doc.exists){
            return undefined
        }
        
        return doc.data() as IProduct
    }

    async updateProduct(product: IProduct): Promise<void>{
        try{
            const docRef = this.collection.doc(product.id)
            await docRef.update(product);
        } catch(err){
            console.error('Error updating product', err);
        }
    }

    async deleteProduct(productID: string): Promise<void>{
        const doc = await this.collection.doc(productID).get().toPromise();

        if(!doc || !doc.exists) {
            throw new Error('ID ${productID} not found')
        }
        
        await this.collection.doc(productID).delete();
    }
}