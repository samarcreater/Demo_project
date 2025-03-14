import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { ButtonComponent } from "../../../buttons/buttons.component";

@Component({
  selector: 'app-login-signup',
  imports: [FormsModule, CommonModule, ButtonComponent],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {

  activeForm : 'login' | 'register' = 'login';
  registerObj:registerModel= new registerModel();
  loginObj:loginModel = new loginModel();
  outline:boolean=true;


  constructor(private _snackbar:MatSnackBar, private _router: Router,private authService:AuthService){}
  toggleForm(form : 'login'| 'register')
  {
    this.activeForm = form;
  }

  registerForm() {
    this.authService.register(this.registerObj).subscribe(
      (response) => {

        this._snackbar.open('User registered successfully', 'Close', { duration: 3000 });
        this.activeForm = 'login'; 
      },
      (error) => {
        this._snackbar.open('Registration failed: ' + (error.error.message || 'Server error'), 'Close', { duration: 3000 });
      }
    );
  }

  loginForm() {
    this.authService.login(this.loginObj).subscribe(
      (response) => {
        const user=response.user;
        this.authService.setUser(user);
      

        this._snackbar.open('Login Successful!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar'],
          horizontalPosition: 'center',  
          verticalPosition: 'bottom'     
        });
        
        this._router.navigate(['/dashboard']); 
      },
      (error) => {
        this._snackbar.open('Login failed: ' + (error.error.message || 'Invalid credentials'), 'Close', { 
          duration: 3000,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'center',  
          verticalPosition: 'bottom'  
          });
      }
    );
  }

}

export class registerModel{
  name:string;
  email:string;
  password:string;
  constructor(){
    this.name = "";
    this.email = "";
    this.password = "";
  }
}

export class loginModel{
  email:string;
  password:string;
  constructor(){
    this.email = "";
    this.password = "";
  }
}