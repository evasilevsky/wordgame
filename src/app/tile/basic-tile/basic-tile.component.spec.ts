import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTileComponent } from './basic-tile.component';

describe('BasicTileComponent', () => {
  let component: BasicTileComponent;
  let fixture: ComponentFixture<BasicTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
