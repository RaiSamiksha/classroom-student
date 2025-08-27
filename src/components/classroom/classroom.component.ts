import { Component, Input } from '@angular/core';
import { StudentComponent } from "../student/student.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classroom',
  standalone: true,
  imports: [StudentComponent, CommonModule],
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.css'
})
export class ClassroomComponent {
   @Input() classroomData: any;
  ngOnInit() {
    debugger;
    console.log(this.classroomData);
  }

   removeStudent(classroom: any, student: any) {
    const idx = classroom.students.indexOf(student);
    if (idx > -1) {
      classroom.students.splice(idx, 1);
    }
  }

}
