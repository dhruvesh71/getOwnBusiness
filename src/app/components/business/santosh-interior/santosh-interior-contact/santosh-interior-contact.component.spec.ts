import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantoshInteriorContactComponent } from './santosh-interior-contact.component';

describe('SantoshInteriorContactComponent', () => {
  let component: SantoshInteriorContactComponent;
  let fixture: ComponentFixture<SantoshInteriorContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantoshInteriorContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantoshInteriorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
