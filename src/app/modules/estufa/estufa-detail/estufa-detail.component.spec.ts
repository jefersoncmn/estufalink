import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstufaDetailComponent } from './estufa-detail.component';

describe('EstufaDetailComponent', () => {
  let component: EstufaDetailComponent;
  let fixture: ComponentFixture<EstufaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstufaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstufaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
