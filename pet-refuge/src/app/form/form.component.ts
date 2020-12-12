import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PetService } from '../pet.service';
import { MatDialog } from '@angular/material/dialog';
import { FormModalComponent } from './form-modal/form-modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  fReader = new FileReader()
  petTypes: string[] = ['Cat', 'Dog']
  petAges: string[] = ['Young', 'Adult', 'Senior']

  petName = new FormControl('')
  petPhoto = new FormControl('')
  petDescription = new FormControl('')
  petType: string = this.petTypes[0]
  petAge: string = this.petAges[0]

  constructor (private petService: PetService, public dialog: MatDialog) { }

  openDialog () {
    this.petService.addPet({ type: this.petType, name: String(this.petName.value), description: String(this.petDescription.value), age: this.petAge, photo: [this.petPhoto.value] }).subscribe();
    this.dialog.open(FormModalComponent);
  }
}
