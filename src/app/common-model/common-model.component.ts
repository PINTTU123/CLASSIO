import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupComponent } from '../shared/popup/popup.component';
import { ContactServiceService } from '../contact-service.service';
@Component({
  selector: 'app-common-model',
  templateUrl: './common-model.component.html',
  styleUrl: './common-model.component.css'
})
export class CommonModelComponent {

isVisible: boolean = false;
  modalForm: FormGroup;
   showSuccess = false;
  showError = false;
  @ViewChild('popup', { static: false }) popup!: PopupComponent;
  @Input() title: string = 'Enter Details';

  constructor(private fb: FormBuilder,private contactService: ContactServiceService) {
    this.modalForm = this.fb.group({
      contactName: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required]]
    });
  }

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  submit() {
    if (this.modalForm.valid) {
     this.contactService.sendContactForm(this.modalForm.value).subscribe({
        next: (res) => {
          this.showSuccess = true;      
          this.showError = false;
          console.log('----------------',res)
          if(res.msgStatus === 'S')
          this.popup.show(res.message,'success');
         else
          this.popup.show(res.message,'error');
          this.modalForm.reset();
          
        },
        error: (err) => {
          this.showSuccess = false;
          this.showError = true;
          if (err.error?.message) {
          this.popup.show(err.error.message);
        } else {
          this.popup.show("Something went wrong. Please try again.");
        }
        }
      });
      this.close();
    }
  }
}
