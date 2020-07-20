// new code

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
    {path: '', redirectTo: 'value', pathMatch: 'full' },
    { path: 'value',  component: ValueComponent },
    { path: '**', redirectTo: ''}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent
   ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
