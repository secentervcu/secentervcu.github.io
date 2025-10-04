import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faLinkedin, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faGlobe} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team',
  imports: [
    TranslatePipe,
    FaIconComponent
  ],
  templateUrl: './team.html',
  styleUrl: './team.sass'
})
export class Team  {
  protected readonly faLinkedin = faLinkedin;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faGlobe = faGlobe;
  protected readonly faXTwitter = faXTwitter;
}
