import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from './food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'supermarket';
  query: string;
  results: any
  obsProduct : Observable<Object>;
  // faccio iniettare lo spotify service e faccio una ricerca

  constructor(public food: FoodService) {

  }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsProduct = this.food.searchProduct(this.query);
    this.obsProduct.subscribe((data) => this.results = data);
  }
}


