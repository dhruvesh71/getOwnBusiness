import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetownbusinessHomeComponent } from './getownbusiness-home.component';

describe('GetownbusinessHomeComponent', () => {
  let component: GetownbusinessHomeComponent;
  let fixture: ComponentFixture<GetownbusinessHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetownbusinessHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetownbusinessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
