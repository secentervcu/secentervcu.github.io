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
  selectedBackgroundColor = 'rgba(255, 179, 0, 0.6)';
  selectedTextColor = '#000000';
  selectedCardColor = '#006894';
  selectedCardTextColor = '#000000';
  selectedCardHoverColor = '#DEDEDE';

  changeBackgroundColor(color: string) {
    this.selectedBackgroundColor = color;
  }

  changeTextColor(color: string) {
    this.selectedTextColor = color;
  }

  changeCardTextColor(color: string) {
    this.selectedCardTextColor = color;
  }

  changeCardColor(color: string) {
    this.selectedCardColor = color;
  }

  changeCardHoverColor(color: string) {
    this.selectedCardHoverColor = color;
  }

  onHover(event: MouseEvent, hoverColor: string) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = hoverColor;
  }

  onLeave(event: MouseEvent, normalColor: string) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = normalColor;
  }
}
