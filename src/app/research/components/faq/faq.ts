import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  imports: [
    TranslatePipe
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.sass'
})
export class Faq {
  openIndexes: number[] = [];

  toggle(index: number)
  {
    if (this.openIndexes.includes(index))
    {
      this.openIndexes = this.openIndexes.filter(i => i !== index);
    }
    else {
      this.openIndexes.push(index);
    }
  }

  isOpen(index: number): boolean
  {
    return this.openIndexes.includes(index);
  }

}
