import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  {
    path : '',
    component : SectionComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'header',
    component : HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
