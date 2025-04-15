import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListExampleComponent } from './grid-list-example.component';

describe('GridListExampleComponent', () => {
  let component: GridListExampleComponent;
  let fixture: ComponentFixture<GridListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
