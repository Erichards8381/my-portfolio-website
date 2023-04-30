import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.sass']
})
export class ThankyouComponent {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log('Hello from thankyou component')
    const contactFormSubmitted = localStorage.getItem('contactFormSubmitted') || document.cookie.includes('contactFormSubmitted=true')
    console.log(contactFormSubmitted)
    if (!contactFormSubmitted) {
      this.router.navigateByUrl('/my-portfolio-website/')
    }
    else{
      localStorage.removeItem('contactFormSubmitted');
      document.cookie = 'contactFormSubmitted=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    }
  }
}
