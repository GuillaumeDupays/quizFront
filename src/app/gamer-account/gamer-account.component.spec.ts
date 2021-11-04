import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerAccountComponent } from './gamer-account.component';

describe('GamerAccountComponent', () => {
  let component: GamerAccountComponent;
  let fixture: ComponentFixture<GamerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamerAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
