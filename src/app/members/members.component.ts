import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from '../_model/student';
import { StudentServices } from '../_services/student.services'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {
  private studentServiceSubscription: Subscription;
  title = 'Members page';
  columnsToDisplay: string[] = ['id', 'name', 'email'];
  data: Student[] = [];

  constructor(private studentServices: StudentServices) {
  }

  ngOnInit() {
    //Get all data first time
    this.data = this.studentServices.getStudents("");

    this.studentServiceSubscription = this.studentServices.filterValue$.subscribe(filterVal => {
      this.data = this.studentServices.getStudents(filterVal);
    });
  }

  ngOnDestroy(): void {
    this.studentServiceSubscription.unsubscribe();
  }
}
