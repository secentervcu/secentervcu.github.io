import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, QueryList, ViewChild, ViewChildren
} from '@angular/core';
import {SwiperOptions} from 'swiper/types';

@Component({
  selector: 'app-logo-display',
  imports: [],
  templateUrl: './logo-display.html',
  styleUrl: './logo-display.sass',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogoDisplay implements AfterViewInit {
  @ViewChild('swiperLogo') swiperRef: ElementRef | undefined;
  @ViewChildren('swiperSlideLogo') slidesRef: QueryList<ElementRef> | undefined;

  private resizeTimeout: any;
  private readonly DEBOUNCE_DELAY = 200;

  constructor(private cdr: ChangeDetectorRef) {
  }

  overlayTop = '50%';

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  };

  ngAfterViewInit() {
    if (this.swiperRef) {
      Object.assign(this.swiperRef.nativeElement, this.swiperConfig);
      this.swiperRef.nativeElement.initialize();
      this.adjustOverlays();
    }
  }

  @HostListener('window:resize', [])
  @HostListener('document:fullscreenchange', [])
  private adjustOverlays = (): void => {
    clearTimeout(this.resizeTimeout);

    const slides = document.querySelectorAll('swiper-slide');

    slides.forEach(slide => {
      const img: HTMLImageElement | null = slide.querySelector('img.main-photo');
      const overlay = slide.querySelector('.overlay-logo, .overlay-group-photo');
      if (!img || !overlay) return;

      const update = () => setTimeout(() => this.updateOverlayPosition(slide as HTMLElement),
        this.DEBOUNCE_DELAY);
      if (img.complete) update();
      else img.addEventListener('load', update, {once: true});
    });
  };

  private updateOverlayPosition(slide: HTMLElement): void {
    const slideHeight = slide.getBoundingClientRect().height;
    const isOverflowing = slideHeight > window.innerHeight;

    this.overlayTop = isOverflowing ? '50vh' : '50%';

    this.cdr.detectChanges();
  }

}
