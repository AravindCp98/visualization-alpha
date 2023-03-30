wimport { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillModuleComponent } from './drill-module.component';

describe('DrillModuleComponent', () => {
  let component: DrillModuleComponent;
  let fixture: ComponentFixture<DrillModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrillModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrillModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
