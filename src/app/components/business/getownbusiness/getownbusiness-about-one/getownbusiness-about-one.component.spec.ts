import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetownbusinessAboutOneComponent } from './getownbusiness-about-one.component';

describe('GetownbusinessAboutOneComponent', () => {
  let component: GetownbusinessAboutOneComponent;
  let fixture: ComponentFixture<GetownbusinessAboutOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetownbusinessAboutOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetownbusinessAboutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
