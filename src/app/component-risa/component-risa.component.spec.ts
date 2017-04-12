import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRisaComponent } from './component-risa.component';

describe('ComponentRisaComponent', () => {
  let component: ComponentRisaComponent;
  let fixture: ComponentFixture<ComponentRisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
