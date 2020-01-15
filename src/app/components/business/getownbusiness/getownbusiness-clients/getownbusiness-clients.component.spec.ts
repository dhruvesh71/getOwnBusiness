import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetownbusinessClientsComponent } from './getownbusiness-clients.component';

describe('GetownbusinessClientsComponent', () => {
  let component: GetownbusinessClientsComponent;
  let fixture: ComponentFixture<GetownbusinessClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetownbusinessClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetownbusinessClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
