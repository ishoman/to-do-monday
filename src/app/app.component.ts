import { Component } from '@angular/core';
import { Task } from './models/task.model'

@Component({
  selector: 'poopity-scoopity',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("Finish weekend Angular homework for Epicodus course1"),
    new Task("Finish weekend Angular homework for Epicodus course2"),
    new Task("Finish weekend Angular homework for Epicodus course3")
  ];
}
