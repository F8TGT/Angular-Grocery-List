import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

interface GroceryItem {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgClass
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  newItem: string = '';
  items: GroceryItem[] = [];

  addItem() {
    if (this.newItem.trim()) {
      this.items.push({ title: this.newItem.trim(), completed: false });
      this.newItem = '';
    }
  }

  toggleCompletion(item: GroceryItem) {
    item.completed = !item.completed;
  }
}
