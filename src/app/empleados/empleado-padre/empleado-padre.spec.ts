import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoPadre } from './empleado-padre';

describe('EmpleadoPadre', () => {
  let component: EmpleadoPadre;
  let fixture: ComponentFixture<EmpleadoPadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoPadre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoPadre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
