import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCheckerComponent } from './apicheckerModule/api-checker/api-checker.component';


const routes: Routes = [{ path: 'apiChecker', component: ApiCheckerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
