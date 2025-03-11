import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Task } from "../models/task";

@Injectable({
    providedIn: 'root'
})
export class TaskService{
    private apiUrl = 'http://localhost:3000/tasks';

    constructor(private http: HttpClient) {}

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl);
    }

    addTasks(task: Task): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task);
    }

    deleteTask(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }


}