import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from '../../model/student.model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  constructor() { }

@Input() getStudent!:Istudent[];
  ngOnInit(): void {
  }



}
