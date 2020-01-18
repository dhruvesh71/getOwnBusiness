import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetownbusinessAboutFourComponent } from './getownbusiness-about-four.component';

describe('GetownbusinessAboutFourComponent', () => {
  let component: GetownbusinessAboutFourComponent;
  let fixture: ComponentFixture<GetownbusinessAboutFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetownbusinessAboutFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetownbusinessAboutFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
