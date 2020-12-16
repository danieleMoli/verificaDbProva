import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

    searchProduct(query: string) {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=2&json=true`;


      let obsProducts = this.http.get(url);
      return obsProducts;
  //Ritorno un observable ai componenti che richiedono il servizio
    }
      getFood(id: string) {
      const url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
      return this.http.get(url,);
    }
}
