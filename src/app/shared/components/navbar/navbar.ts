import {Component, ElementRef, ViewChild} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.sass'],
  imports: [
    TranslatePipe,
    RouterLink
  ]
})
export class Navbar {
  @ViewChild('nav') nav!: ElementRef<HTMLElement>;

  constructor(private viewportScroller: ViewportScroller) {
  }

  public scrollToSection(sectionId: string): void {
    this.viewportScroller.setOffset([0, this.getNavHeight()]);
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  private getNavHeight(): number {
    return this.nav.nativeElement.offsetHeight;
  }
}
