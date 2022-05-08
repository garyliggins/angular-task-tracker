import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task; //this is where the prop is brought in from task.component.html <!-- this is the prop that is passed to another components [task]='task' -->
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {
  }

  onDelete(task: any) {
    this.onDeleteTask.emit(task)
  }

  onToggle(task:any) {
    this.onToggleReminder.emit(task)
  }

}