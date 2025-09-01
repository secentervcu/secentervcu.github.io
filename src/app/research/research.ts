import {Component} from '@angular/core';
import {LogoDisplay} from '../shared/components/logo-display/logo-display';
import {Navbar} from '../shared/components/navbar/navbar';
import {About} from './components/about/about';
import {Team} from './components/team/team';
import {LabResearch} from './components/lab-research/lab-research';
import {Collaborations} from './components/collaborations/collaborations';
import {Education} from './components/education/education';
import {Footer} from '../shared/components/footer/footer';
import {NavItem} from '../shared/components/navbar/nav-item.interface';
import {Contact} from '../shared/components/contact/contact';

@Component({
  selector: 'app-research',
  imports: [
    Navbar,
    LogoDisplay,
    About,
    Team,
    LabResearch,
    Collaborations,
    Education,
    Footer,
    Contact
  ],
  templateUrl: './research.html',
  styleUrl: './research.sass'
})
export class Research {
  menuItems: NavItem[] = [
    {key: 'navbar.about', fragment: 'about'},
    {key: 'navbar.team', fragment: 'team'},
    {key: 'navbar.research', fragment: 'research'},
    {key: 'navbar.education', fragment: 'education', icon: 'chevron_right'},
    {key: 'navbar.contact', fragment: 'contact'}
  ];
}
