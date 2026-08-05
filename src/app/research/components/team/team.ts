import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Member } from './member/member';

@Component({
  selector: 'app-team',
  imports: [
    TranslatePipe,
    Member
  ],
  templateUrl: './team.html',
  styleUrl: './team.sass'
})
export class Team {
}
