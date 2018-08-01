import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AioAnnouncementBarComponent } from './aio-announcement-bar.component';

describe('AioAnnouncementBarComponent', () => {
  let component: AioAnnouncementBarComponent;
  let fixture: ComponentFixture<AioAnnouncementBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AioAnnouncementBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AioAnnouncementBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
