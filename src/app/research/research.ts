import {Component} from '@angular/core';
import {LogoDisplay} from '../shared/components/logo-display/logo-display';
import {Navbar} from '../shared/components/navbar/navbar';
import {About} from './components/about/about';
import {Team} from './components/team/team';
import {LabResearch} from './components/lab-research/lab-research';
import {Collaborations} from './components/collaborations/collaborations';
import {Education} from './components/education/education';

@Component({
  selector: 'app-research',
  imports: [
    Navbar,
    LogoDisplay,
    About,
    Team,
    LabResearch,
    Collaborations,
    Education
  ],
  templateUrl: './research.html',
  styleUrl: './research.sass'
})
export class Research {

}
