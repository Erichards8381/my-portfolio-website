import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  @ViewChild('toggle') toggleElement!: ElementRef;

  closeMenu() {
    // Uncheck the toggle checkbox so the hamburger menu closes when the web app is deployed
    const toggle = this.toggleElement.nativeElement as HTMLInputElement;
    toggle.checked = false;
  }
}
