import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-input-item',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './input-item.component.html',
  styleUrl: './input-item.component.css'
})
export class InputItemComponent {

}
