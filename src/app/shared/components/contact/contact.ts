import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [
    TranslatePipe
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.sass'
})
export class Contact {

}
