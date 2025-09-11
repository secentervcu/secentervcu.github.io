import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatLabel, MatFormField} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  imports: [
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    FormsModule
  ],
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.sass'
})
export class ColorPicker {
  primary_palette_print_colors = [
    {
      'name': 'White',
      'value': 'rgb(255, 255, 255)'
    },
    {
      'name': 'Black',
      'value': 'rgb(0, 0, 0)'
    },
    {
      'name': 'Pantone Cool Gray',
      'value': 'rgb(99, 101, 106)'
    },
    {
      'name': 'Pantone 130C and 109U',
      'value': 'rgb(255, 179, 0)'
    },
    {
      'name': 'Pantone 130C and 109U 80%',
      'value': 'rgba(255, 179, 0, 0.8)'
    },
    {
      'name': 'Pantone 130C and 109U 60%',
      'value': 'rgba(255, 179, 0, 0.6)'
    },
    {
      'name': 'Pantone 130C and 109U 40%',
      'value': 'rgba(255, 179, 0, 0.4)'
    },
    {
      'name': 'Pantone 130C and 109U 20%',
      'value': 'rgba(255, 179, 0, 0.2)'
    }
  ];
  primary_palette_digital_colors = [
    {
      'name': 'Yellow',
      'value': '#FFB300'
    },
    {
      'name': 'Black',
      'value': '#000000'
    },
    {
      'name': 'White',
      'value': '#FFFFFF'
    }
  ];
  secondary_palette_digital_colors = [
    {
      'name': 'Grey',
      'value': '#DEDEDE'
    },
    {
      'name': 'Blue',
      'value': '#006894'
    },
    {
      'name': 'Red',
      'value': '#B02E01'
    },
    {
      'name': 'Green',
      'value': '#0B652E'
    },
    {
      'name': 'Purple',
      'value': '#8E6A90'
    }
  ];

  @Input() textDescription: string = '';
  @Output() colorSelected = new EventEmitter<Record<string, string>>();
  @Input() selectedColor = this.primary_palette_print_colors[0];
  @ViewChild('customColorPicker') colorPicker!: ElementRef<HTMLInputElement>;

  showCustomPicker = false;
  customColorValue = {name: 'custom', value: '#FFFFFF'};


  onSelectColor(color: any) {
    this.selectedColor = color;
    this.showCustomPicker = color.name === 'custom';
    this.colorSelected.emit(this.selectedColor);
  }

  openColorPicker() {
    setTimeout(() => this.colorPicker.nativeElement.click());
  }

  onCustomColorChange(event: any) {
    this.customColorValue.value = event.target.value;
    this.selectedColor = this.customColorValue;
    this.colorSelected.emit(this.customColorValue);
  }

  compareSelectedOption(color1: any, color2: any) {
    return color1 && color2 ? color1.name === color2.name : color1 === color2;
  }
}
