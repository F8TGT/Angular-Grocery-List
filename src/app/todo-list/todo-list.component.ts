import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
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
    NgClass,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  newItem: string = '';
  items: GroceryItem[] = [];
  editingItem: GroceryItem | null = null;
  editedTitle: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push({ title: this.newItem.trim(), completed: false });
      this.newItem = '';
    }
  }

  toggleCompletion(item: GroceryItem) {
    item.completed = !item.completed;
  }

  startEditing(item: GroceryItem) {
    this.editingItem = item;
    this.editedTitle = item.title;
  }

  saveEdit(item: GroceryItem) {
    if (this.editedTitle.trim()) {
      item.title = this.editedTitle.trim();
      this.editingItem = null;
      this.editedTitle = '';
    }
  }

  cancelEdit() {
    this.editingItem = null;
    this.editedTitle = '';
  }
}
