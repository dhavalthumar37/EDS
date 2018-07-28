import { Injectable } from '@angular/core'
import { Student, TestDetail } from '../_model/student'
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StudentServices {
    private filterValue: BehaviorSubject<string> = new BehaviorSubject<string>("");
    filterValue$ = this.filterValue.asObservable();
    data: Student[];

    constructor() {
        this.data = [
            { Id: 1, firstName: "Matt", lastName: "Mathew", email: "mm@gmail.com", dob: "07/19/2000", height: 5.8, weight: 50, testResults: [{ testId: 1, marks: 50, takenOn: "07/23/1991" }] },
            { Id: 2, firstName: "James", lastName: "Butt", email: "jb@gmail.com", dob: "08/24/2001", height: 5.5, weight: 60, testResults: [{ testId: 1, marks: 50, takenOn: "07/23/1991" }] },
            { Id: 3, firstName: "Graciela", lastName: "Darakjy", email: "gd@gmail.com", dob: "09/23/1991", height: 5.1, weight: 80, testResults: [{ testId: 1, marks: 50, takenOn: "07/23/1991" }] },
            { Id: 4, firstName: "Kiley", lastName: "Venere", email: "kv@gmail.com", dob: "10/21/1992", height: 5.9, weight: 70, testResults: [{ testId: 1, marks: 50, takenOn: "07/23/1991" }] },
            { Id: 5, firstName: "Donette", lastName: "Foller", email: "df@gmail.com", dob: "11/20/1995", height: 6.0, weight: 75, testResults: [{ testId: 1, marks: 50, takenOn: "07/23/1991" }] }
        ];
    }

    applyFilterOnName(filterValue: string): any[] {
        this.filterValue.next(filterValue);
        return this.getStudentIdAndFirstName(filterValue);
    }

    getStudentIdAndFirstName(filterValue): any[] {
        return this.data.filter(option => option.firstName.toLowerCase().includes(filterValue)).map((val) => {
            return { Id: val.Id, name: val.firstName };
        });
    }

    getStudents(filterValue: string): Student[] {
        if (filterValue == "")
            return this.data;
        else {
            return this.data.filter(s => s.firstName.toLowerCase().includes(filterValue));
        }
    }


    getStudentDetailsById(id: number): Student {
        let d = this.data.filter(s => s.Id == id);
        if (d != null && d.length > 0)
            return d[0];
        return null;
    }

    getTestResultById(id: number): TestDetail[] {
        let d = this.getStudentDetailsById(id);
        if (!d)
            return d.testResults;
        return null;
    }

}