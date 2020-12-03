import { Component } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent {
  get petId () {
    return +this.route.snapshot.paramMap.get('id')!;
  }

  pet$: Observable<Pet> = this.petService.getPet(this.petId);

  constructor (
    public petService: PetService,
    public route: ActivatedRoute
  ) { }
}
