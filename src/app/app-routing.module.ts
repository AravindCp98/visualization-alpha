import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCheckerComponent } from './apicheckerModule/api-checker/api-checker.component';
import { MainDashBoardComponent } from './main-dash-board/main-dash-board.component';
import { CoronavirusUpdateComponent } from './coronavirus-update/coronavirus-update.component';


const routes: Routes = [
  { path: 'apiChecker', component: ApiCheckerComponent },
  { path: 'visualization-alpha', component: MainDashBoardComponent },
  { path: 'CoronavirusUpdateComponent', component: CoronavirusUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
