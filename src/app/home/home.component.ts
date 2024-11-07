import { Component } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIf, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
showAlert(message:string){
  alert(message);
  
}

}
