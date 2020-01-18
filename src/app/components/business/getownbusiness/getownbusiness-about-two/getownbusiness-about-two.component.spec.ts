import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetownbusinessAboutTwoComponent } from './getownbusiness-about-two.component';

describe('GetownbusinessAboutTwoComponent', () => {
  let component: GetownbusinessAboutTwoComponent;
  let fixture: ComponentFixture<GetownbusinessAboutTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetownbusinessAboutTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetownbusinessAboutTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
