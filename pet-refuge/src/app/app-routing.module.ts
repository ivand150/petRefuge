import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: PetListComponent },
  { path: 'detail/:id', component: PetDetailComponent },
  { path: '**', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
