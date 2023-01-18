import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactInfoComponent } from './async/views/contact-info/contact-info.component';
import { ContactListComponent } from './async/views/contact-list/contact-list.component';
import { ContactComponent } from './async/views/contact/contact.component';
import { HomeComponent } from './async/views/home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path: 'contacto', component:ContactComponent},
  {path: 'contacto-lista', component:ContactListComponent},
  {path: 'contacto-info/:country', component:ContactInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
