import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrl: './userhomepage.component.css'
})
export class UserhomepageComponent {
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.checkAuthentication();
  }

  checkAuthentication(): void {

    this.authService.checkuser().subscribe(
      (response) => {
       if(response.statusCode != 200){
        window.location.href = '/';
       }
       
      },
      (error) => {
        window.location.href = '/';
      }
    );

  }

}
