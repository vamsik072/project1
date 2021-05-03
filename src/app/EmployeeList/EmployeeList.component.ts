import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-EmployeeList',
  templateUrl: './EmployeeList.component.html',
  styleUrls: ['./EmployeeList.component.css']
})
export class EmployeeListComponent implements OnInit {

  public course =[
    {"id":1, "name":"angular"},
    {"id":2,"name":"React"},
    {"id":3,"name":"Vue"},
    {"id":4,"name":"Bootstrap"},
    {"id":5,"name":"monoDB"}

  ]

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onselect(x:any){

    this.route.navigate(['/course',x.id]);

  }

}
