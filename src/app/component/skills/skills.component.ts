import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent {
  skills: any;
  iconPath = "";
  name = "";
  experience = "";
  showModal = false;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get<any>('../../../assets/data/skills.json').subscribe(data => {
      this.skills = data; 
    })
  }

  onSkillClick(iconPath: string, name: string, experience: string) {
    this.iconPath = iconPath
    this.name = name
    this.experience = experience
    this.showModal = true
  }

  closeModal() {
    this.showModal = false
  }
}
