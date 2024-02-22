import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoGameCardComponent } from './bingo-game-card.component';

describe('BingoGameCardComponent', () => {
  let component: BingoGameCardComponent;
  let fixture: ComponentFixture<BingoGameCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BingoGameCardComponent]
    });
    fixture = TestBed.createComponent(BingoGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
