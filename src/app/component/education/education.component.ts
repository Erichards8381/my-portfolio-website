import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit{
  jsonData: any;
  showModal = false;
  description = '';
  name = '';
  code = '';
  hours = 0;
  credits = 0;
  numeric_grade = 0;
  alpha_grade = '';
  grade_point = 0;

  
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get<any>('./assets/data/grades.json').subscribe(data => {
      this.jsonData = data.semester;
    })
  }

  onCourseClick(description: string, name: string, code:string, hours:number, credits:number, numeric_grade:number, alpha_grade:string, grade_point:number){
    this.description = description
    this.name = name
    this.code = code
    this.hours = hours
    this.credits = credits
    this.numeric_grade = numeric_grade
    this.alpha_grade = alpha_grade
    this.grade_point = grade_point
    this.showModal = true
  }

  closeModal() {
    this.showModal = false
  }

  toggleLevel(data: any) {
    data.isExpanded = !data.isExpanded;
}
}
