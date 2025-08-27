import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  @Input() studentData: any;
 classroom: any;
 @Output() deleteStudent = new EventEmitter<string>();

  ngOnInit() {
    debugger;
    console.log(this.studentData);
  }

  delete(student:any) {
    this.deleteStudent.emit(student);
  }

}
