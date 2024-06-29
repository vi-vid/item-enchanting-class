import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantedItemComponent } from './enchanted-item.component';

describe('EnchantedItemComponent', () => {
  let component: EnchantedItemComponent;
  let fixture: ComponentFixture<EnchantedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnchantedItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchantedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
