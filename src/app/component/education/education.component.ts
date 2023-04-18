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
  
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get<any>('../../../assets/data/grades.json').subscribe(data => {
      this.jsonData = data.semester;
    })
  }

  onCourseClick(description: string){
    console.log(description)
    this.description = description
    this.showModal = true
  }

  closeModal() {
    this.showModal = false
  }

  toggleLevel(data: any) {
    data.isExpanded = !data.isExpanded;
}
}
