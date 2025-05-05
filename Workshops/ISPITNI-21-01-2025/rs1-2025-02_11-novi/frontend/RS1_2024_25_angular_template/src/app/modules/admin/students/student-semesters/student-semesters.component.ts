import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-semesters',
  standalone: false,

  templateUrl: './student-semesters.component.html',
  styleUrl: './student-semesters.component.css'
})
export class StudentSemestersComponent implements OnInit{

  studentId:any;


  constructor(
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {

      this.studentId = this.route.snapshot.params['id'];
      //this.studentId = this.route.snapshot.paramMap.get('id');

    }




}
