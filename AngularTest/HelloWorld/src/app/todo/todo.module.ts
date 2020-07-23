import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { TodoComponent } from './todo.component';
import { TodoService} from './todo.service';


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    TodoComponent,
  ],
  providers:[
    TodoService
  ]
})
export class TodoModule { }
