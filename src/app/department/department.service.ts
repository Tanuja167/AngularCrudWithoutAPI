import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class DepartmentService
{
    
    depList:any=[];
    constructor()
    {
        this.depList=[
            {id:1,name:"HR"}
       ];
    }

public getAllDepartment():any
{
 return this.depList;
}

public addDepartment(dep:any):any
{
    this.depList.push({id:dep.id,name:dep.name});
}
public updateDepartment(dep:any):any
{
    for(let i=0;i<this.depList.length;i++)
    {
        if(this.depList[i].id==dep.id)
        {
            this.depList[i].name=dep.name;
        
            break
        }
    }
}

public deleteDepartment(id:number)
{
    let i=0;
    for(;i<this.depList.length;i++)
    {
        if(this.depList[i].id==id)
        {
          break;
        }
    }
    this.depList.splice(i,1);
}
}