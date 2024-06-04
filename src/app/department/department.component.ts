import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private depService:DepartmentService, private fb:FormBuilder) { }

  depForm=this.fb.group({
    id:[,Validators.required],
    name:['',Validators.required],
  
   });
   isUpdatebtn:boolean=false;
   
   ngOnInit(): void {
    this.getAllDepartments();
  }

  depList:any=[];
  
getAllDepartments(){
this.depList=this.depService.getAllDepartment();
}

get id(){
  return this.depForm.get('id');
}
get name(){
  return this.depForm.get('name');
}

edit(dep:any)
{
  //  this.empForm.get('id')?.disable();
    this.isUpdatebtn=true;
    this.depForm.setValue
    ({
      id:dep.id,
      name:dep.name,
    
    });
    
  }
  
  delete(id:number)
  {
    let result=confirm('Do you want to delete id '+id+' ?');
    if(result==true)
    {
      this.depService.deleteDepartment(id);
      this.getAllDepartments();
    }
  
  }
 
  clearForm()
  {
    this.depForm.reset();
    this.isUpdatebtn=false;
  }
  
  saveData()
  {
    let dep=this.depForm.value;
    if(!this.isUpdatebtn){
      this.depService.addDepartment(dep);
    }
   else
   {
      this.depService.updateDepartment(dep);
      this.isUpdatebtn=false;
     // this.empForm.get('id')?.enable();
   }
   this.depForm.reset();
   this.getAllDepartments();
  }

}
