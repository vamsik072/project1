import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtdfComponent } from './vtdf.component';

describe('VtdfComponent', () => {
  let component: VtdfComponent;
  let fixture: ComponentFixture<VtdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VtdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
