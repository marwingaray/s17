import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { ContactInfoComponent } from './views/contact-info/contact-info.component';
import { ContactListComponent } from './views/contact-list/contact-list.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ContactInfoComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ContactInfoComponent,
    ContactComponent,
    ContactListComponent
  ]
})
export class AsyncModule { }
