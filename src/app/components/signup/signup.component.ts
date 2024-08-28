import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
      ]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signUpForm.valid) {
      let userData = {
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password
      };
      console.log(userData);
      this.userservice.signUp(userData).subscribe(
        (response: any) => {
          console.log(response);
          this.snackbar.open("User Registration Successful", '', { duration: 5000 });
        },
        (error) => {
          console.log(error);
          this.snackbar.open("User Registration Unsuccessful", '', { duration: 5000 });
        }
      );
    }
    else{
      this.snackbar.open("User Entered Information Is Not valid");
    }
  }
}
