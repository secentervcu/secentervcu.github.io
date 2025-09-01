import {ApplicationRef, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {NgClass, ViewportScroller} from '@angular/common';
import {NavItem} from './nav-item.interface';
import {filter, first} from 'rxjs';

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

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private appRef: ApplicationRef) {
    this.router.events
        .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe(() => {
          const fragment = this.router.parseUrl(this.router.url).fragment;

          if (fragment) {
            setTimeout(() => {
              this.appRef.isStable.pipe(first((stable) => stable)).subscribe(() => {
                this.scrollToSection(fragment);
              });
            });
          }
        });
  }

  public scrollToSection(sectionId: string): void {
    this.viewportScroller.setOffset([0, this.getNavHeight()]);
    this.viewportScroller.scrollToAnchor(sectionId);
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
