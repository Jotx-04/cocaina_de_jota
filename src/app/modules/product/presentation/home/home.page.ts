import { Component } from '@angular/core';
import { DeleteProductCommand } from '../../application/commands/delete-product.command';
import { productRepo } from '../../infrastructure/repository/product.repo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../domain/models/interfaces/product/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productForm: FormGroup;
  //product: IProduct;

  constructor(
    private deletepro: DeleteProductCommand,
    private readonly produrepo: productRepo,
    private formBuilder: FormBuilder
  ) {
    
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required]
    });
  }
  
  async createProduct(){
    if(this.productForm.invalid){
      return
    }
  }
  
  const product: IProduct = {
    name: this.productForm.value
  }
}
