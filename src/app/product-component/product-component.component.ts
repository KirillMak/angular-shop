import { Component, OnInit } from '@angular/core';

enum Category {
    Food,
    Clothes,
    Beverages
}

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {

  name: string = "Product";
  description: string = "Some description";
  price: number = 0;
  category: Category.Food;
  isAvailable: boolean = true;

  buyProduct(){
    console.log("Product has been bought!");
  }
  

  constructor() { }

  ngOnInit() {
  }

}
