import { Component, Input } from '@angular/core';

type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

// tasks =[
//   {
//     id: 't1',
//     userId: 'u1',
//     title: 'Master Angular',
//     summary:
//       'Learn all the basic and advanced features of Angular & how to apply them.',
//     dueDate: '2025-12-31',
//   },


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required: true}) task !: Task;
}
