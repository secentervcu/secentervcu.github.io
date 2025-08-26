import { Component } from '@angular/core';
import {LogoDisplay} from '../shared/components/logo-display/logo-display';
import {Navbar} from '../shared/components/navbar/navbar';

@Component({
  selector: 'app-research',
  imports: [
    Navbar,
    LogoDisplay
  ],
  templateUrl: './research.html',
  styleUrl: './research.sass'
})
export class Research {

}
