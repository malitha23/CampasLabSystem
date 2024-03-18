import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { HttpClientModule } from '@angular/common/http';
import { UserhomepageComponent } from './homepages/userhomepage/userhomepage.component';
import { AppointmentformComponent } from './items/appointmentform/appointmentform.component'; 
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterpageComponent,
    UserhomepageComponent,
    AppointmentformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    TabViewModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
