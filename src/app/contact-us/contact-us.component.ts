import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors,ReactiveFormsModule } from '@angular/forms';

import { ContactServiceService } from '../contact-service.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
contactForm: FormGroup;
  showSuccess = false;
  showError = false;
  constructor(private fb: FormBuilder,private contactService: ContactServiceService) {
    this.contactForm = this.fb.group({
      contactName: ['', [Validators.required, this.noSpecialCharsValidator]],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required]]
    });
  }
  noSpecialCharsValidator(control: AbstractControl): ValidationErrors | null {
    const regex = /^[a-zA-Z0-9 ]*$/; // allows letters, numbers and spaces
    const valid = regex.test(control.value);
    return valid ? null : { specialChars: true };
  }
  onSubmit() {
   if (this.contactForm.valid) {
      this.contactService.sendContactForm(this.contactForm.value).subscribe({
        next: (res) => {
          this.showSuccess = true;
          this.showError = false;
          this.contactForm.reset();
        },
        error: (err) => {
          this.showSuccess = false;
          this.showError = true;
        }
      });
   }
  }
}
