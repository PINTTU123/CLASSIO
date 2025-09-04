import { Component,ViewChild } from '@angular/core';
import { CommonModelComponent } from '../common-model/common-model.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
@ViewChild('modal') modal!: CommonModelComponent; 

  openModal() {
    this.modal.open();
  }
}
