import { Component, OnInit, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { PetService } from '../pet.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor (private petService: PetService, @Inject(DOCUMENT) public document: Document, public auth: AuthService) {
  }

  pets: Subject<any> = new Subject()

  ngOnInit (): void {

  }

  sideNavClick (): any {
    const sideNavElement = <HTMLDivElement>document.querySelector('.side__nav');
    sideNavElement.style.display === 'block' ? sideNavElement.style.display = 'none' : sideNavElement.style.display = 'block';
  }

  findPets () {
    this.petService.getPets()
      .subscribe();
  }

  findPet (type: string) {
    this.petService.getPetType(type)
      .subscribe(console.log);
  }
}
