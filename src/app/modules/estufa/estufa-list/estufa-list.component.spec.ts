import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstufaListComponent } from './estufa-list.component';

describe('EstufaListComponent', () => {
  let component: EstufaListComponent;
  let fixture: ComponentFixture<EstufaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstufaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstufaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
