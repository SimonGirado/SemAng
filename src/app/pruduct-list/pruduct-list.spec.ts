import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruductList } from './pruduct-list';

describe('PruductList', () => {
  let component: PruductList;
  let fixture: ComponentFixture<PruductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruductList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
