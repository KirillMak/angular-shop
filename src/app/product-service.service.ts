import { Injectable } from '@angular/core';

enum Category {
  Food,
  Clothes,
  Beverages
}

interface Product {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
}
