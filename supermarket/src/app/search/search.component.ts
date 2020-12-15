import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  query: string;
  title = 'first-routed-app';
  obsProduct: Observable<Object>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify: FoodService) {

  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsProduct = this.spotify.searchProduct(this.query);
    this.obsProduct.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.products && res.products.items) {
      this.results = res.products.items;
    }
  }

}
