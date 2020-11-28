import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetService } from '../pet.service'
import { Pet } from '../pet'

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pets$: Observable<Pet[]> = this.petService.getPets()

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

}
