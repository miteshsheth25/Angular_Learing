import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


    title = "Codes With Pankaj"

    userForm: FormGroup;
    submitted = false;

    constructor(private fb: FormBuilder) {
      this.userForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
    }
  }

  // Getter for form controls
  get f() { return this.userForm.controls; }

}
