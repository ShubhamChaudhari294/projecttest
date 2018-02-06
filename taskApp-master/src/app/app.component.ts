import { Component } from '@angular/core';
import { TasksService } from './tasks.service';
import { Http, Response , Headers, RequestOptions} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TasksService],
  styles: [`
    h3{
      color: dodgerblue;
    }`]
})
export class AppComponent {
 constructor(private taskService: TasksService , private http: Http) {}
  profile = {};
  testResponse = {};

  loadTasks() {
    this.taskService.getTask().subscribe(data => this.profile = data);
  }
  deleteTasks(id){
    console.log(id);
    return this.http.get(`https://firestore.googleapis.com/v1beta1/projects/`+id).subscribe(
        data => {
          this.testResponse = data;
          console.log("Record deleted");
        }
    );
  }
}
