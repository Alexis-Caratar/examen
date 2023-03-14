import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalformularioComponent } from './modalformulario.component';

describe('ModalformularioComponent', () => {
  let component: ModalformularioComponent;
  let fixture: ComponentFixture<ModalformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalformularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
