import { Component, Input, OnInit, EventEmitter } from '@angular/core';
export interface Task {
  id: number;
  name: string;
  status: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public editStatus = false;
  txtTask!: string;
  public taskList: Task[] = [];

  addBtn(): void {
    const newTask: Task = {
      id: this.taskList.length + 1,
      name: this.txtTask,
      status: false
    }
    this.taskList.push(newTask);
    localStorage.setItem("todo", JSON.stringify(this.taskList));
    this.txtTask = '';
  }
  updateTask(): void {

  }
 
  deleteAll() {
    this.taskList = [];
    localStorage.setItem("todo", JSON.stringify(this.taskList));
  }

  ngOnInit(): void {
    
  }
}
