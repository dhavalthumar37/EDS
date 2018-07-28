import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../_services/auth.service'
import { MediaMatcher } from '@angular/cdk/layout';
import { StudentServices } from '../_services/student.services';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-layout',
  templateUrl: './home.layout.html',
  styleUrls: ['./home.layout.scss']
})

export class HomeLayoutComponent implements OnInit {
  private _mobileQueryListener: () => void;
  studentAutoComplete = new FormControl();
  mobileQuery: MediaQueryList;
  options: any[];

  constructor(private studentServices: StudentServices,
    private authService: AuthService, private router: Router,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnInit() {
    this.options = this.studentServices.getStudentIdAndFirstName("");
  }

  applyFilter(filterValue: string) {
    try {
      this.options = this.studentServices.applyFilterOnName(filterValue.trim().toLowerCase());
    } catch (err) {
      console.log(err);
    }
  }

  onSelectStudent(event: any, id: number) {
    if (event.source.selected) {
      let url = './members/student/' + id;
      this.router.navigate([url]);
    }
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

