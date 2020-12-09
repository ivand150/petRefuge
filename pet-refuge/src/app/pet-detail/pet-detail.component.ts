import { Component } from '@angular/core';
import { PetService } from '../pet.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from '../pet';
import { User } from '../user.model';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent {
  get petId () {
    return +this.route.snapshot.paramMap.get('id')!;
  }

  pet$: Observable<Pet> = this.petService.getPet(this.petId)
  user$: Observable<User> = this.authService.getUser(this.authService.fireUser.user.displayName);

  favPet: any;
  user: any;

  addFavourite () {
    // eslint-disable-next-line no-debugger
    debugger;
    this.authService.addFavourite(this.user.uid, this.favPet._id).subscribe();
    console.log('asdasd');
  }

  ngOnInit () {
    this.pet$.subscribe(val => (this.favPet = val));
    this.user$.subscribe(val => (this.user = val));
  }

  constructor (
    public petService: PetService,
    public authService: AuthService,
    public route: ActivatedRoute
  ) { }
}
