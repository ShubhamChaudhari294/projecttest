import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksService {
  constructor (
    private http: Http
  ) {}

  getTask() {
    return this.http.get(`https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks`)
    .map((res:Response) => res.json());
  }
 
}