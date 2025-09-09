import {Component} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-footer',
  imports: [FontAwesomeModule],
  templateUrl: './new-footer.html',
  styleUrl: './new-footer.sass'
})
export class NewFooter {
  protected readonly faEnvelope = faEnvelope;

  protected readonly faPhone = faPhone;
}
