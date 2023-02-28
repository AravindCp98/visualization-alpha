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


@NgModule({
  declarations: [
    AppComponent,
    MainDashBoardComponent,
    PiechartComponent,
    ApiCheckerComponent,
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'apitester', component: ApiCheckerComponent }
    ]),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
