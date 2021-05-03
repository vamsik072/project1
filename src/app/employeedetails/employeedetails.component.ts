import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  public courseId: string | null | undefined;

  constructor(private activateR: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let Cid = (this.activateR.snapshot.paramMap.get('id'));
    this.courseId = Cid

  }

  goBack() {
    this.router.navigate(['/course']);
  }
}
