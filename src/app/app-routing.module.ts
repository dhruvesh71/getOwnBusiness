import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/common/error-page/error-page.component';


const routes: Routes = [
  {
    path: 'santoshinterior', loadChildren: () => import('./components/business/santosh-interior/santosh-interior.module')
      .then(m => m.SantoshInteriorModule)
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '', component: ErrorPageComponent },
  { path: '**', component: ErrorPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
