import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-prduct',
  templateUrl: './prduct.component.html',
  styleUrls: ['./prduct.component.css']
})
export class PrductComponent implements OnInit {

  routeObs: Observable<ParamMap>;

  product: any; //Qui salverò la traccia selezionata
  foodServiceObs: any;


  //Usiamo la dependency injection per farci mandare i moduli del routing e dello
  //SpotifyService
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FoodService,
    private location: Location) { }



  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) => {
    console.log(params);
    let product_nameId = params.get('id'); //Ottengo l'id dai parametri
    console.log(product_nameId); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.foodServiceObs = this.service.getFood(product_nameId);
    this.foodServiceObs.subscribe(this.getData)
  }

  getData = (data) => {

    this.product = data.product;

     console.log(this.product);
  }

  back(): void {
    this.location.back();
  }

}
