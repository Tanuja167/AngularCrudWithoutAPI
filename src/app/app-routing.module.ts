import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'Employee', component:EmployeeComponent},
  {path:'Department', component:DepartmentComponent},
  {path:'Student', component:StudentComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
