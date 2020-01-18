import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetownbusinessContactComponent } from './getownbusiness-contact.component';

describe('GetownbusinessContactComponent', () => {
  let component: GetownbusinessContactComponent;
  let fixture: ComponentFixture<GetownbusinessContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetownbusinessContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetownbusinessContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
