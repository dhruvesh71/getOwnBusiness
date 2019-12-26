import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantoshInteriorHomeComponent } from './santosh-interior-home.component';

describe('SantoshInteriorHomeComponent', () => {
  let component: SantoshInteriorHomeComponent;
  let fixture: ComponentFixture<SantoshInteriorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantoshInteriorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantoshInteriorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
