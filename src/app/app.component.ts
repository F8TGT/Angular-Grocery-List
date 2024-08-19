import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TodoListComponent} from "./todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, FormsModule, NgClass, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
