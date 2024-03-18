import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrl: './registerpage.component.css'
})
export class RegisterpageComponent {
  
  user: any = {};
  isLoading: boolean = false;
  registrationSuccess: boolean = false;
  confirmPassword: string = ''; 
  message: string = '';
  messageshow: boolean = false;

  constructor( private authService: AuthService ) { }

  register() {
   
    if (!this.user.firstName || !this.user.lastName || !this.user.email) {
      this.messageshow = true;
      this.message = 'Please fill in all the fields.';
      setTimeout(() => {
        this.messageshow = false;
        this.message = '';
      }, 3000);
      
      return;
    }

    if (this.user.password !== this.confirmPassword) {
      this.messageshow = true;
      this.message = 'Passwords do not match.';
      setTimeout(() => {
        this.messageshow = false;
        this.message = '';
      }, 3000);
      return;
    }
  
    this.isLoading = true;
    this.user.role = 'user';
    this.authService.register(this.user).subscribe(
      (response) => {
        setTimeout(() => {
          this.messageshow = true;
          this.message = 'Registration successful';
          this.isLoading = false;
          console.log('Registration successful:', response);
        }, 3000);
      },
      (error) => {
        setTimeout(() => {
          this.messageshow = true;
          this.message = 'Registration failed';
          this.isLoading = false;
          console.log('Registration failed:', error);
        }, 3000);
      }
    );
  }
  

  closeAlert() {
    this.registrationSuccess = false; // Method to close the alert
  }
}
