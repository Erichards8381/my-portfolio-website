import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent {
  jsonData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get<any>('../../../assets/data/grades.json').subscribe(data => {
      this.jsonData = data.semester;
      console.log(this.jsonData)
    })
  }

  onCourseClick(description: string){
    console.log(description)
  }

  toggleLevel(data: any) {
    data.isExpanded = !data.isExpanded;
}
}
