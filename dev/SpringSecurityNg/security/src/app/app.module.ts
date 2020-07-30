import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full'}, //savadak neka tutorial
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [RouterModule], //tutorial nebija pievienots

  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]

})

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
export class AppModule { }
