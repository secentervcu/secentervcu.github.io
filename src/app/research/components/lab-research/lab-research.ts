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
export class LabResearch {
  selectedBackgroundColor =     {
    'name': 'Pantone 130C and 109U 80%',
    'value': 'rgba(255, 179, 0, 0.8)'
  };
  selectedTextColor = {
    'name': 'Black',
    'value': '#000000'
  };
  selectedCardTextColor = {
    'name': 'Black',
    'value': '#000000'
  };
  selectedCardColor =     {
    'name': 'Grey',
    'value': '#DEDEDE'
  };
  selectedCardHoverColor = {
    'name': 'White',
    'value': 'rgb(255, 255, 255)'
  };

  // changeBackgroundColor(color: any) {
  //   this.selectedBackgroundColor = color;
  // }
  //
  // changeTextColor(color: any) {
  //   this.selectedTextColor = color;
  // }
  //
  // changeCardTextColor(color: any) {
  //   this.selectedCardTextColor = color;
  // }
  //
  // changeCardColor(color: any) {
  //   this.selectedCardColor = color;
  // }
  //
  // changeCardHoverColor(color: any) {
  //   this.selectedCardHoverColor = color;
  // }

  onHover(event: MouseEvent, hoverColor: any) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = hoverColor.value;
  }

  onLeave(event: MouseEvent, normalColor: any) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = normalColor.value;
  }
}
