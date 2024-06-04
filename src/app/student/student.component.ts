import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studService:StudentService, private fb:FormBuilder) { }

  studForm=this.fb.group({
    id:[,Validators.required],
    name:['',Validators.required],
  
   });
   isUpdatebtn:boolean=false;
   

  ngOnInit(): void {
    this.getAllStudent();
  }
  studList:any=[];
  getAllStudent(){
  this.studList=this.studService.getAllStudent();
  }
  get id(){
    return this.studForm.get('id');
  }
  get name(){
    return this.studForm.get('name');
  }
  
  edit(stud:any){
    //  this.empForm.get('id')?.disable();
      this.isUpdatebtn=true;
      this.studForm.setValue({
        id:stud.id,
        name:stud.name,
      
      });
      
    }
    delete(id:number){
      let result=confirm('Do you want to delete id '+id+' ?');
      if(result==true)
      {
        this.studService.deleteStudent(id);
        this.getAllStudent();
      }
    
    }
    clearForm()
    {
      this.studForm.reset();
      this.isUpdatebtn=false;
    }
    saveData(){
      let stud=this.studForm.value;
      if(!this.isUpdatebtn){
        this.studService.addStudent(stud);
      }
     else{
        this.studService.updateStudent(stud);
        this.isUpdatebtn=false;
       // this.empForm.get('id')?.enable();
     }
     this.studForm.reset();
     this.getAllStudent();
    }

}


