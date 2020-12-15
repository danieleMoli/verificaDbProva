import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

    searchProduct(query: string) {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=pizza&page_size=2&json=true`;
      const headers = new HttpHeaders({ });

      let obsProducts = this.http.get(url, { headers });
      return obsProducts;
  //Ritorno un observable ai componenti che richiedono il servizio
    }
}
