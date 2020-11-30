import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor () {

  }

  ngOnInit (): void {
  }

  sideNavClick (): any {
    const sideNavElement = <HTMLDivElement>document.querySelector('.side__nav')
    sideNavElement.style.display === 'block' ? sideNavElement.style.display = '' : sideNavElement.style.display = 'block'
  }
}
