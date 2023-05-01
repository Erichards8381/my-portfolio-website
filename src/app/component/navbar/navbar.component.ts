import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  closeHamburgerMenu(){
    const input = document.querySelector("#toggle") as HTMLInputElement;
    input.checked = false;
  }
}
