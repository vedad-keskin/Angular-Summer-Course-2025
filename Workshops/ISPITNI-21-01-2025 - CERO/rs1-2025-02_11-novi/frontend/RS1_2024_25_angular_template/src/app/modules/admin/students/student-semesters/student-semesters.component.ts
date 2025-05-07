import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  StudentGetByIdEndpointService, StudentGetByIdResponse
} from '../../../../endpoints/student-endpoints/student-get-by-id-endpoint.service';
import {MySnackbarHelperService} from '../../../shared/snackbars/my-snackbar-helper.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-student-semesters',
  standalone: false,

  templateUrl: './student-semesters.component.html',
  styleUrl: './student-semesters.component.css'
})
export class StudentSemestersComponent implements OnInit{

  studentId:any;
  //student:any;
  student: StudentGetByIdResponse | null = null;


  constructor(
    private route: ActivatedRoute,
    private studentGetByIdEndpointService:StudentGetByIdEndpointService,
    private snackbar: MySnackbarHelperService,
    private router: Router,
    private dialog: MatDialog,
    ) {

    this.studentId = this.route.snapshot.params['id'];
    //this.studentId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    this.fetchStudent();

    }


  private fetchStudent() {

    this.studentGetByIdEndpointService.handleAsync(this.studentId).subscribe({
      next: (student) => {

        this.student = student;

      },
      error: (error) => console.error('Error fetching student data', error),
    });

  }
}
