import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';
import { TodoComponent } from './todo/todo.component';
// import { SliderComponent } from './slider/slider.component';


const routes: Routes = [
  // {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'Currency', component: CurrencyComponent},
  {path: 'Weather', component: WeatherComponent},
  {path: 'Todo', component: TodoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
