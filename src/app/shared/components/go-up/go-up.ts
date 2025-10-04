import {Component, HostListener} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-go-up',
  imports: [
    NgClass
  ],
  templateUrl: './go-up.html',
  styleUrl: './go-up.sass'
})
export class GoUp {
  protected scrollY = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollY = window.scrollY;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
