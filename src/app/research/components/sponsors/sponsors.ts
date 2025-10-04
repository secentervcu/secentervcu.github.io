import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-sponsors',
  imports: [
    TranslatePipe
  ],
  templateUrl: './sponsors.html',
  styleUrl: './sponsors.sass',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Sponsors implements AfterViewInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  @ViewChildren('swiperSlide') slidesRef: QueryList<ElementRef> | undefined;

  ngAfterViewInit() {
    if (this.slidesRef) {
      this.slidesRef.changes.subscribe(() => {
        if (this.swiperRef) {
          const swiperParams = {
            speed: 400,
            loop: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false
            },
            slidesPerView: 'auto',
            breakpoints: {
              320: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 60
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 80
              },
              950: {
                slidesPerView: 4,
                spaceBetween: 120
              }
            },
            pagination: {clickable: true},
          };
          Object.assign(this.swiperRef.nativeElement, swiperParams);
          this.swiperRef.nativeElement.initialize();
        }
      });
    }
  }
}
