import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantedItemComponent } from './enchanted-item.component';

describe('EnchantedItemComponent', () => {
  let component: EnchantedItemComponent;
  let fixture: ComponentFixture<EnchantedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnchantedItemComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchantedItemComponent);
    fixture.componentRef.setInput('item', {
      title: 'test title',
      userId: 1,
      id: 123,
      body: 'test body'
    })
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display title property first', () => {
    fixture.detectChanges();

    const displayedProperty = fixture.componentInstance.item().title;
    expect(displayedProperty).toBe('test title');
  });

  it('should display id when clicked', () => {
    fixture.detectChanges();

    const componentElement = fixture.debugElement;
    componentElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    const displayedProperty = fixture.componentInstance.item().id;
    expect(displayedProperty).toBe(123);
  });

  it('should display userId properties when clicked twice', () => {
    fixture.detectChanges();

    const componentElement = fixture.debugElement;
    componentElement.triggerEventHandler('click', null);
    componentElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    const displayedProperty = fixture.componentInstance.item().userId;
    expect(displayedProperty).toBe(1);
  });

  it('should display body properties when clicked thrice', () => {
    fixture.detectChanges();

    const componentElement = fixture.debugElement;
    componentElement.triggerEventHandler('click', null);
    componentElement.triggerEventHandler('click', null);
    componentElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    const displayedProperty = fixture.componentInstance.item().body;
    expect(displayedProperty).toBe('test body');
  });
  
  it('should return to title property when clicked four times', () => {
    fixture.detectChanges();

    const componentElement = fixture.debugElement;
    componentElement.triggerEventHandler('click', null);
    componentElement.triggerEventHandler('click', null);
    componentElement.triggerEventHandler('click', null);
    componentElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    const displayedProperty = fixture.componentInstance.item().title;
    expect(displayedProperty).toBe('test title');
  });
});
