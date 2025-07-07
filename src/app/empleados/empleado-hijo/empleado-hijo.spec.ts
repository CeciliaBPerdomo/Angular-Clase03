import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHijo } from './empleado-hijo';

describe('EmpleadoHijo', () => {
  let component: EmpleadoHijo;
  let fixture: ComponentFixture<EmpleadoHijo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoHijo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoHijo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
