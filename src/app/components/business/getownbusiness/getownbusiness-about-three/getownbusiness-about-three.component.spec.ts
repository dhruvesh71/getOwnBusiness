import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetownbusinessAboutThreeComponent } from './getownbusiness-about-three.component';

describe('GetownbusinessAboutThreeComponent', () => {
  let component: GetownbusinessAboutThreeComponent;
  let fixture: ComponentFixture<GetownbusinessAboutThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetownbusinessAboutThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetownbusinessAboutThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
