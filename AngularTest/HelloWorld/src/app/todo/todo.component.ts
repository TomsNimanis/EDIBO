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

interface TodoData {
  id: number;
  name: string;
  isComplete: boolean;
  secret: any;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})

export class TodoComponent implements OnInit {
  // baseRate = 'EUR';
  // symbols = 'USD,GBP';
  // currencyData: any;

  // wesatherData: any

  // startDate: string;
  // endDate: string;
  // rates: any[];
  // id: number;
  name: string;
  isComplete: boolean;
  secret: any;

  id: number;

  todos: any[];





  constructor(private restClient: HttpClient) {}

  ngOnInit(): void {
    this.restClient
      .get<TodoData>(this.getTodoUrl())
      .subscribe((data) => this.processData(data));
  }

  processData(data: TodoData): void {
    // this.startDate = data.start_at;
    // this.endDate = data.end_at;
    // this.rates = Object.entries(data.rates)
  //  this.todo=data.date;
  //  this.todo=data.temperatureC;

  //  this.todo=data.temperatureF;
  //  this.todo=data.summary;

    this.todos = Object.entries(data);
    // .map(divainiba=>({
    //   date: divainiba,
    //   temperatureC: divainiba,
    //   temperatureF: divainiba,
    //   summary: divainiba,

    // }));
  }

  // getRatesUrl(): string {
  getTodoUrl(): string {
    return environment.todoUrl;
      // .replace('{base}', this.baseRate)
      // .replace('{symbols}', this.symbols);
  }

  // submitForm() {
  //   var formData: any = new FormData();
  //   formData.append("name", this.form.get('name').value);
  //   formData.append("isComplete", this.form.get('isComplete').value);
  //   formData.append("secret", this.form.get('secret').value);

  //   this.http.post('http://localhost:5000/api/TodoItems', formData).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   )
  // }

}
