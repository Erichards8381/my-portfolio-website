import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent {
  skills: any;
  selectedItem: any;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get<any>('../../../assets/data/skills.json').subscribe(data => {
      this.skills = data; 
    })
  }

  imageOnClick(item: any) {
    this.selectedItem = item;
  }

}
