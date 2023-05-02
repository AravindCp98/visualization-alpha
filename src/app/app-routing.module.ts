import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCheckerComponent } from './apicheckerModule/api-checker/api-checker.component';
import { MainDashBoardComponent } from './main-dash-board/main-dash-board.component';
import { CoronavirusUpdateComponent } from './coronavirus-update/coronavirus-update.component';
import { DrillModuleComponent } from './drill-module/drill-module.component';
// import {drillModule} from './drill-module';

const routes: Routes = [
  { path: 'apiChecker', component: ApiCheckerComponent },
  { path: 'visualization-alpha', component: MainDashBoardComponent },
  { path: 'CoronavirusUpdateComponent', component: CoronavirusUpdateComponent },
  // { path: 'Drill', component: DrillModuleComponent }
  //implementing lazy loading
  //if below lazymodule show error then comment it (line 15-17 and uncomment line 13)
  { path:'Drill',loadChildren:()=> 
  import('.././app/drill-module').then(module=>module.DrillModuleComponent)
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
