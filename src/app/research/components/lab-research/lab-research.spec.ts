import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabResearch } from './lab-research';

describe('LabResearch', () => {
  let component: LabResearch;
  let fixture: ComponentFixture<LabResearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabResearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabResearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
