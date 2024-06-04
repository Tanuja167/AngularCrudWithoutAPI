import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup,FormArray } from '@angular/forms'
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmployeeService,private fb:FormBuilder){}
empForm=this.fb.group({
 id:[,Validators.required],
 name:['',Validators.required],
 salary:[,Validators.required]
});
isUpdatebtn:boolean=false;

ngOnInit(): void {
  this.getAllEmployees();
}
empList:any=[];

getAllEmployees()
{
   this.empList=this.empService.getAllEmployees();
}
get id(){
  return this.empForm.get('id');
}
get name(){
  return this.empForm.get('name');
}
get salary(){
  return this.empForm.get('salary');
}
edit(emp:any){
//  this.empForm.get('id')?.disable();
  this.isUpdatebtn=true;
  this.empForm.setValue({
    id:emp.id,
    name:emp.name,
    salary:emp.salary
  });
  
}
delete(id:number){
  let result=confirm('Do you want to delete id '+id+' ?');
  if(result==true)
  {
    this.empService.deleteEmployee(id);
    this.getAllEmployees();
  }

}
clearForm()
{
  this.empForm.reset();
  this.isUpdatebtn=false;
}
saveData(){
  let emp=this.empForm.value;
  if(!this.isUpdatebtn){
    this.empService.addEmployee(emp);
  }
 else{
    this.empService.updateEmployee(emp);
    this.isUpdatebtn=false;
   // this.empForm.get('id')?.enable();
 }
 this.empForm.reset();
 this.getAllEmployees();
}


  // ngOnInit(): void {
  // }

}