import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  imports: [
    TranslatePipe
  ],
  templateUrl: './team.html',
  styleUrl: './team.sass'
})
export class Team  {}
