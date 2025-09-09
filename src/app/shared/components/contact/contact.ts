import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [
    TranslatePipe,
    FontAwesomeModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.sass'
})
export class Contact {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }
}
