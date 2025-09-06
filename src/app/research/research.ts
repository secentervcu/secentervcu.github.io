import {Component} from '@angular/core';
import {LogoDisplay} from '../shared/components/logo-display/logo-display';
import {Navbar} from '../shared/components/navbar/navbar';
import {About} from './components/about/about';
import {Team} from './components/team/team';
import {LabResearch} from './components/lab-research/lab-research';
import {Collaborations} from './components/collaborations/collaborations';
import {Footer} from '../shared/components/footer/footer';
import {NavItem} from '../shared/components/navbar/nav-item.interface';
import {Contact} from '../shared/components/contact/contact';
import {GoUp} from '../shared/components/go-up/go-up';
import {Faq} from './components/faq/faq';

@Component({
  selector: 'app-research',
  imports: [
    Navbar,
    LogoDisplay,
    About,
    Team,
    LabResearch,
    Collaborations,
    Footer,
    Contact,
    GoUp,
    Faq
  ],
  templateUrl: './research.html',
  styleUrl: './research.sass'
})
export class Research {
  menuItems: NavItem[] = [
    {key: 'navbar.about', fragment: 'about'},
    {key: 'navbar.team', fragment: 'team'},
    {key: 'navbar.research', fragment: 'research'},
    {key: 'navbar.faq', fragment: 'faq'},
    {key: 'navbar.contact', fragment: 'contact'},
  ];
}
