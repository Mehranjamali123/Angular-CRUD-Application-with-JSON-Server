  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { CurdComponent } from './curd/curd.component';
  import { ReactiveFormsModule } from '@angular/forms';
  import { TableShowComponent } from './table-show/table-show.component';
  import { HttpClientModule } from '@angular/common/http';

  @NgModule({
    declarations: [
      AppComponent,
      CurdComponent,
      TableShowComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
