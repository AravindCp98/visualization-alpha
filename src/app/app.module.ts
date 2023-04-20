import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDashBoardComponent } from './main-dash-board/main-dash-board.component';
import { PiechartComponent } from './piechart/piechart.component';
import { RouterModule } from '@angular/router';
import { ApiCheckerComponent } from './apicheckerModule/api-checker/api-checker.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoronavirusUpdateComponent } from './coronavirus-update/coronavirus-update.component';
import { DrillModuleComponent } from './drill-module/drill-module.component';
import { SubdrillComponent } from './drill-module/subdrill/subdrill/subdrill.component';


@NgModule({
  declarations: [
    AppComponent,
    MainDashBoardComponent,
    PiechartComponent,
    ApiCheckerComponent,
    CoronavirusUpdateComponent,
    DrillModuleComponent,
    SubdrillComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'apitester', component: ApiCheckerComponent }
    ]),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
