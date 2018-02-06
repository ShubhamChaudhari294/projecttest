import { Component } from '@angular/core';
import { TasksService } from './tasks.service';
import { Http, Response , Headers, RequestOptions} from '@angular/http';
import { FormBuilder, Validators } from '@angular/forms';
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
    return this.http.delete('https://firestore.googleapis.com/v1beta1/'+id).subscribe(
        data => {
          this.testResponse = data;
          alert("Record deleted");
        }
    );
  }
}
