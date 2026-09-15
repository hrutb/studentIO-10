import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../model/student.model';
import { students } from '../../const/studentArr';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor() { }

  StudentArr:Istudent[]=students ;

  ngOnInit(): void {
  }

}
