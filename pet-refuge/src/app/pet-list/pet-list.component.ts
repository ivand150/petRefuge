import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets$: Observable<Pet[]> = this.petService.getPets()
  constructor (private petService: PetService) { }

  ngOnInit (): void {
  }
}
