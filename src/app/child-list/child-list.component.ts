import { Component, Input } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrl: './child-list.component.scss'
})
export class ChildListComponent {
  @Input() tasks: Task[] = [];
  @Input() textOfTask!: string;
  public editStatus = false;
  public currentTask!: any;

  selectedTask: Task | null = null;


  ngOnInit(): void { }

  deleteBtn(id: number): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.updateNumProperties();
      localStorage.setItem("todo", JSON.stringify(this.tasks));
    }
  }

  private updateNumProperties(): void {
    for (let i = 0; i < this.tasks.length; i++) {
      this.tasks[i].id = i + 1;
    }
  }

  updateStatus(task: any): void {

  }

  editTask(id: number): void {
    this.selectedTask = { ...this.tasks[id - 1] };
  }

  saveChanges(): void {
    if (this.selectedTask) {
      const index = this.tasks.findIndex(task => task.id === this.selectedTask!.id);
      if (index !== -1) {
        this.tasks[index] = { ...this.selectedTask };
      }
      localStorage.setItem("todo", JSON.stringify(this.tasks));
      this.selectedTask = null;
    }
  }
}
