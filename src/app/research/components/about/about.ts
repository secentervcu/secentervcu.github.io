import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {SafeHtmlPipe} from '../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-about',
  imports: [
    TranslatePipe,
    SafeHtmlPipe
  ],
  templateUrl: './about.html',
  styleUrl: './about.sass'
})
export class About {

}
