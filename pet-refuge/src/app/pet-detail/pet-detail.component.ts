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
    private petService: PetService,
    private route: ActivatedRoute
  ) { }

  getPet (): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.petService.getPet(id)
      .subscribe(pet => {
        console.log(id);
        this.pet = pet;
      });
  }

  ngOnInit (): void {
    this.getPet();
  }
}
