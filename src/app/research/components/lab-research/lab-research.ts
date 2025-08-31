import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-lab-research',
  imports: [
    TranslatePipe
  ],
  templateUrl: './lab-research.html',
  styleUrl: './lab-research.sass'
})
export class LabResearch {}
