import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrductComponent } from './prduct/prduct.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { IdComponent } from './id/id.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrductComponent,
    SearchComponent,
    AboutComponent,
    IdComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
