import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurdComponent } from './curd/curd.component';
import { TableShowComponent } from './table-show/table-show.component';

const routes: Routes = [
  {path:'', title:'show', component:TableShowComponent},
  {path:'addstudent', title:'curd', component:CurdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
