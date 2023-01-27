import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  nombres!:string;
  dni!:number;
  estado!:string;
  showSuccess=false

  onSubmit() {
    this.showSuccess=true
  }
}
