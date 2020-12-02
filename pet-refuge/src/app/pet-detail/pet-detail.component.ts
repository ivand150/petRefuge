import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: Pet | undefined;

  constructor (
    public petService: PetService,
    public route: ActivatedRoute
  ) { }

  getPet (id:number): void {
    this.petService.getPet(id)
      .subscribe(pet => {
        this.pet = pet;
      });
  }

  ngOnInit (): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.getPet(id);
  }
}
