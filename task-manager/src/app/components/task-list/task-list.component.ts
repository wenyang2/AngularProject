import {Component, OnInit} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit{
    tasks: Task[] = [];

    constructor(private taskService: TaskService){}

    ngOnInit(): void {
        this.taskService.getTasks().subscribe(data => {
            this.tasks = data;
        })
    }

    deleteTask(id: number): void {
        this.taskService.deleteTask(id).subscribe(() =>{
            this.tasks = this.tasks.filter(task => task.id !== id);
        });
    }
}