import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [{path: 'about', component: AboutComponent},
  {path: '', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
