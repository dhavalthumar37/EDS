import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { StudentServices } from '../../_services/student.services'
import { Student } from '../../_model/student'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  private studentDetails: Student;
  message = "Please select student";

  constructor(private activatedRoute: ActivatedRoute, private studentServices: StudentServices) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.loadStudentDetails(routeParams.id);
    });
  }

  loadStudentDetails(id) {
    if (id != null && id != undefined) {
      this.studentDetails = this.studentServices.getStudentDetailsById(id);
      if (this.studentDetails == null) {
        this.message = "Student not exists.";
      }
    }
  }

}
