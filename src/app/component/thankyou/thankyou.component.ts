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
    const contactFormSubmitted = localStorage.getItem('contactFormSubmitted') || document.cookie.includes('contactFormSubmitted=true')

    if (!contactFormSubmitted) {
      this.router.navigateByUrl('')
    }
    else{
      localStorage.removeItem('contactFormSubmitted');
      document.cookie = 'contactFormSubmitted=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    }
  }
}
