import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RelationsComponent } from './relations/relations.component';

const routes: Routes = [
  { path:  '', redirectTo:  'users', pathMatch:  'full' },
  { path: 'users', component: UserComponent },
  { path: 'relations', component: RelationsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [
  UserComponent,
  RelationsComponent
];
