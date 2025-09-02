import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoUp } from './go-up';

describe('GoUp', () => {
  let component: GoUp;
  let fixture: ComponentFixture<GoUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
