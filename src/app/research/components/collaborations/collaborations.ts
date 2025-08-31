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
  selector: 'app-collaborations',
  imports: [
    TranslatePipe
  ],
  templateUrl: './collaborations.html',
  styleUrl: './collaborations.sass',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Collaborations implements AfterViewInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  @ViewChildren('swiperSlide') slidesRef: QueryList<ElementRef> | undefined;

  ngAfterViewInit() {
    if (this.slidesRef) {
      this.slidesRef.changes.subscribe(() => {
        if (this.swiperRef) {
          this.swiperRef.nativeElement.initialize();
        }
      });
    }
  }
}
