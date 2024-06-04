import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    empList:any=[];
constructor(){
    this.empList=[
        {id:1,name:"Suraj",salary:25000}
    ];
}
public getAllEmployees():any{
 return this.empList;
}

public addEmployee(emp:any):any{
    this.empList.push({id:emp.id,name:emp.name,salary:emp.salary});
}
public updateEmployee(emp:any):any{
    for(let i=0;i<this.empList.length;i++){
        if(this.empList[i].id==emp.id){
            this.empList[i].name=emp.name;
            this.empList[i].salary=emp.salary;
            break
        }
    }
}

public deleteEmployee(id:number){
    let i=0;
    for(;i<this.empList.length;i++){
        if(this.empList[i].id==id)
        {
          break;
        }
    }
    this.empList.splice(i,1);
}
}