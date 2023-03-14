import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronavirusUpdateComponent } from './coronavirus-update.component';

describe('CoronavirusUpdateComponent', () => {
  let component: CoronavirusUpdateComponent;
  let fixture: ComponentFixture<CoronavirusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronavirusUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoronavirusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
