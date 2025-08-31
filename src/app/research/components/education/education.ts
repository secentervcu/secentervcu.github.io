import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  imports: [
    TranslatePipe
  ],
  templateUrl: './education.html',
  styleUrl: './education.sass'
})
export class Education {

}
