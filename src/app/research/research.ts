import {Component} from '@angular/core';
import {LogoDisplay} from '../shared/components/logo-display/logo-display';
import {Navbar} from '../shared/components/navbar/navbar';
import {About} from './components/about/about';

@Component({
  selector: 'app-research',
  imports: [
    Navbar,
    LogoDisplay,
    About
  ],
  templateUrl: './research.html',
  styleUrl: './research.sass'
})
export class Research {

}
