import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgClass, ViewportScroller} from '@angular/common';
import {NavItem} from './nav-item.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.sass'],
  imports: [
    TranslatePipe,
    RouterLink,
    NgClass
  ]
})
export class Navbar {
  @Input() navItems: NavItem[] = [];
  @ViewChild('nav') nav!: ElementRef<HTMLElement>;
  protected isOpen = false;

  @HostListener('window:load', [])
  onLoad() {
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      this.scrollToSection(fragment)
    }
    console.log('abc');
  }

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {
  }

  public scrollToSection(sectionId: string): void {
    this.viewportScroller.setOffset([0, this.getNavHeight()]);
    this.viewportScroller.scrollToAnchor(sectionId, {behavior: 'smooth'});
  }

  private getNavHeight(): number {
    return this.nav.nativeElement.offsetHeight;
  }

  protected toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  protected navigateTo(fragment: string) {
    this.isOpen = false;
    this.scrollToSection(fragment);
  }
}
