import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantoshInteriorOurClientsComponent } from './santosh-interior-our-clients.component';

describe('SantoshInteriorOurClientsComponent', () => {
  let component: SantoshInteriorOurClientsComponent;
  let fixture: ComponentFixture<SantoshInteriorOurClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantoshInteriorOurClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantoshInteriorOurClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
