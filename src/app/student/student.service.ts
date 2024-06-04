import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class StudentService{
    studList:any=[];
constructor(){
    this.studList=[
        {id:1,name:"Tanuja"}
    ];
}
public getAllStudent():any{
 return this.studList;
}

public addStudent(stud:any):any{
    this.studList.push({id:stud.id,name:stud.name});
}
public updateStudent(stud:any):any{
    for(let i=0;i<this.studList.length;i++){
        if(this.studList[i].id==stud.id){
            this.studList[i].name=stud.name;
        
            break
        }
    }
}

public deleteStudent(id:number){
    let i=0;
    for(;i<this.studList.length;i++){
        if(this.studList[i].id==id)
        {
          break;
        }
    }
    this.studList.splice(i,1);
}
}