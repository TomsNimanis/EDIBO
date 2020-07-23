import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';

// interface RateDateRates {
//   [k: string]: { [k: string]: number }
// }

// interface RateData {
//   start_at: string;
//   base: string;
//   end_at: string;
//   rates: RateDateRates;
// }

interface WeatherData {
  id: number;
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})

export class WeatherComponent implements OnInit {
  // baseRate = 'EUR';
  // symbols = 'USD,GBP';
  // currencyData: any;

  // wesatherData: any

  // startDate: string;
  // endDate: string;
  // rates: any[];

  id: number;

  temperatures: any[];

  constructor(private restClient: HttpClient) {}

  ngOnInit(): void {
    this.restClient
      .get<WeatherData>(this.getTemperaturesUrl())
      .subscribe((data) => this.processData(data));
  }

  processData(data: WeatherData): void {
    // this.startDate = data.start_at;
    // this.endDate = data.end_at;
    // this.rates = Object.entries(data.rates)
  //  this.temperatures=data.date;
  //  this.temperatures=data.temperatureC;

  //  this.temperatures=data.temperatureF;
  //  this.temperatures=data.summary;

    this.temperatures = Object.entries(data);
    // .map(divainiba=>({
    //   date: divainiba,
    //   temperatureC: divainiba,
    //   temperatureF: divainiba,
    //   summary: divainiba,

    // }));
  }

  // getRatesUrl(): string {
  getTemperaturesUrl(): string {
    return environment.temperaturesUrl;
      // .replace('{base}', this.baseRate)
      // .replace('{symbols}', this.symbols);
  }
}
