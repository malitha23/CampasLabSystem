import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
   
  email!: string;
  password!: string;

  constructor() { }

  login() {
    // Handle login logic here
    console.log('Logging in...');
  }

}
