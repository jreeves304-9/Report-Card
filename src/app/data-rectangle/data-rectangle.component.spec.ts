import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRectangleComponent } from './data-rectangle.component';

describe('DataRectangleComponent', () => {
  let component: DataRectangleComponent;
  let fixture: ComponentFixture<DataRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataRectangleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
