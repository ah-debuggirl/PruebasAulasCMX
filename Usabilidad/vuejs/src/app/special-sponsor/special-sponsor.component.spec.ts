import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSponsorComponent } from './special-sponsor.component';

describe('SpecialSponsorComponent', () => {
  let component: SpecialSponsorComponent;
  let fixture: ComponentFixture<SpecialSponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialSponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
