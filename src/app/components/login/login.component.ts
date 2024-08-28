import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { NoteCardComponent } from '../note-card/note-card.component';
import { NoteService } from 'src/app/services/note/note.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  token: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private noteServices:NoteService,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
        ],
      ],
    });
    console.log(this.loginForm);
  }

  onLogin() {
    debugger;
    this.submitted = true;
    if (this.loginForm.invalid) {
      let userData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      console.log(userData);
      this.userService.logIn(userData).subscribe((logindata) => {
        console.log(logindata);
        if (logindata.success) {
          this.snackBar.open(logindata.message, '', { duration: 5000 });
          let token: string = logindata.data.tokenString;
          localStorage.setItem('token', token);
          this.authService.login();
          this.router.navigate(['/dashboard']);
          this.noteServices.getAllNotes().subscribe(data=>{
            console.log(data);
          });
        }
        else{
          this.snackBar.open(logindata.message, '', { duration: 5000 });
        }
      });
    } else {
      this.snackBar.open('User Fields Are Invalid', '', { duration: 5000 });
    }
  }
}
