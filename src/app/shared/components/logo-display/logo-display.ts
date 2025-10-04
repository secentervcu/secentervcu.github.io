import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA, ElementRef, QueryList, ViewChild, ViewChildren
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

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    // loop: true,
    // speed: 400,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      clickable: true,
    },
  };

  ngAfterViewInit() {
    if (this.swiperRef) {
      Object.assign(this.swiperRef.nativeElement, this.swiperConfig);
      this.swiperRef.nativeElement.initialize();

    }
  }

}
