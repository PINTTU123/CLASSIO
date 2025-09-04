import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
@Input() message: string = '';
  @Input() type: 'success' | 'error' | 'info' = 'info';
  isVisible: boolean = false;

  show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    this.message = message;
    this.type = type;
    this.isVisible = true;

    // Auto hide after 3 seconds
    setTimeout(() => this.isVisible = false, 3000);
  }

  
}
