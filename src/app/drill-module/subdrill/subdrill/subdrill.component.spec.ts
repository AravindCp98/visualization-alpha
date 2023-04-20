import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdrillComponent } from './subdrill.component';

describe('SubdrillComponent', () => {
  let component: SubdrillComponent;
  let fixture: ComponentFixture<SubdrillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdrillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubdrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
