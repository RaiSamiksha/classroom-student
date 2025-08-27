import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClassroomComponent } from "../components/classroom/classroom.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClassroomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'classroom-student';
  class = [{
  "classroomId": "CLS101",
  "className": "Grade 10 - A",
  "students": [
    {
      "studentId": "S001",
      "firstName": "Ananya",
      "lastName": "Sharma",
      "age": 15,
      "gender": "Female",
      "email": "ananya.sharma@school.edu",
      "grades": {
        "math": 92,
        "science": 88,
        "english": 85,
        "history": 78
      },
      "attendance": {
        "presentDays": 180,
        "absentDays": 5
      }
    },
    {
      "studentId": "S002",
      "firstName": "Rohan",
      "lastName": "Verma",
      "age": 16,
      "gender": "Male",
      "email": "rohan.verma@school.edu",
      "grades": {
        "math": 75,
        "science": 80,
        "english": 70,
        "history": 90
      },
      "attendance": {
        "presentDays": 172,
        "absentDays": 13
      }
    },
    {
      "studentId": "S003",
      "firstName": "Meera",
      "lastName": "Nair",
      "age": 15,
      "gender": "Female",
      "email": "meera.nair@school.edu",
      "grades": {
        "math": 98,
        "science": 95,
        "english": 92,
        "history": 89
      },
      "attendance": {
        "presentDays": 184,
        "absentDays": 1
      }
    }
  ]
}
];
}
