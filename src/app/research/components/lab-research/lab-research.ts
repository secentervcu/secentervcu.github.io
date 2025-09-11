import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {ColorPicker} from '../../../shared/components/color-picker/color-picker';

@Component({
  selector: 'app-lab-research',
  imports: [
    TranslatePipe,
    ColorPicker
  ],
  templateUrl: './lab-research.html',
  styleUrl: './lab-research.sass'
})
export class LabResearch {
  selectedBackgroundColor = {
    'name': 'Pantone 130C and 109U 60%',
    'value': 'rgba(255, 179, 0, 0.6)'
  };
  selectedTextColor = {
    'name': 'Black',
    'value': '#000000'
  };
  selectedCardColor = {
    'name': 'Blue',
    'value': '#006894'
  };
  selectedCardTextColor = {
    'name': 'Black',
    'value': '#000000'
  };
  selectedCardHoverColor = {
    'name': 'Grey',
    'value': '#DEDEDE'
  };

  changeBackgroundColor(color: any) {
    this.selectedBackgroundColor = color;
  }

  changeTextColor(color: any) {
    this.selectedTextColor = color;
  }

  changeCardTextColor(color: any) {
    this.selectedCardTextColor = color;
  }

  changeCardColor(color: any) {
    this.selectedCardColor = color;
  }

  changeCardHoverColor(color: any) {
    this.selectedCardHoverColor = color;
  }

  onHover(event: MouseEvent, hoverColor: any) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = hoverColor.value;
  }

  onLeave(event: MouseEvent, normalColor: any) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = normalColor.value;
  }
}
