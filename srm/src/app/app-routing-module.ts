import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ManagementComponent } from './components/management/management.component';
import { AccountComponent } from './components/account/account.component';
import { ReceivableComponent } from './components/receivable/receivable.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/gestao', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    children: [
        { path: 'gestao', component: ManagementComponent },
        { path: 'contadigital', component: AccountComponent },
        { path: 'recebiveis', component: ReceivableComponent },
        { path: 'notFound', component: NotfoundComponent }       
      ]  
  },
  { path: 'notFound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notFound', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
