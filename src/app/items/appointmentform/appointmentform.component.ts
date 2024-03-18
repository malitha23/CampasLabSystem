import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-appointmentform',
  templateUrl: './appointmentform.component.html',
  styleUrl: './appointmentform.component.css'
})
export class AppointmentformComponent {
  
  loading: boolean = false;
  constructor(private authService: AuthService) { }

  onSubmit(appointmentForm: any): void {
 
    if (appointmentForm.valid) {
      this.loading = true;
      appointmentForm.value.approve = 0;
      appointmentForm.value.userId = 23;
      console.log(appointmentForm.value);
      this.authService.appointment(appointmentForm.value).subscribe(
        (response) => {
          
          if(response.statusCode == 200){
            setTimeout(() => {
              this.loading = false;
    
          }, 3000);
          }else{
            setTimeout(() => {
              this.loading = false;
          }, 3000);
          }
        },
        (error) => {
          this.loading = false;
        }
      );
    }else{
 
    }
  }

}
