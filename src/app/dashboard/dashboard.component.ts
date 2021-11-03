import { Component, OnInit } from '@angular/core';
import { task } from '../models/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Task = '';
  ListOfTask: task [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  AddTask():void{
   this.ListOfTask.push(new task(this.Task,false));
  this.Task = '';

  }

  RemoveTask(index:number):void{
    this.ListOfTask.splice(index,1);
  }


  Actualize(index:number):void{
    if(this.ListOfTask[index].state == false){
      this.ListOfTask[index].state = true;
    }
    else{
      this.ListOfTask[index].state = false;
    }
    

  }

}
