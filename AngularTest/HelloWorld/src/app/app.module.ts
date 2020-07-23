import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
// import { XyzComponent } from './xyz/xyz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{CurrencyModule} from './currency/currency.module'
import { AppRoutingModule } from './app-routing.module';
import{WeatherModule} from './weather/weather.module';
import{TodoModule} from './todo/todo.module';


@NgModule({
  declarations: [
    AppComponent,
    // XyzComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    CurrencyModule,
    AppRoutingModule,
    WeatherModule,
    TodoModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
