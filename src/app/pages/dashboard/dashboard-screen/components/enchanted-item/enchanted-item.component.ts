import { Component, HostBinding, HostListener, computed, effect, input, model, output, signal } from '@angular/core';
import { DashboardItem } from '../../../../../domain/dashboard/dashboard.models';

type PropertyKeys = keyof DashboardItem;

const SortedPropertyKeys: PropertyKeys[]  = ['title', 'userId', 'id', 'body'];

@Component({
  selector: 'app-enchanted-item',
  standalone: true,
  imports: [],
  templateUrl: './enchanted-item.component.html',
  styleUrl: './enchanted-item.component.scss'
})
export class EnchantedItemComponent {
  @HostBinding('class')
  get backgroundClass() { return this.selected() ? 'bg-white' : 'bg-slate-300' }

  @HostBinding('title')
  get titleAttribute() { return `${this.currentPropertyToken()}: ${this.currentPropertyValue()}`; }

  @HostListener('click')
  public onClick() {
    this.selectedChange.emit(true);
    this.currentPropertyIndex.set((this.currentPropertyIndex() + 1) % SortedPropertyKeys.length);
  }

  @HostListener('document:keydown.escape')
  public onEscape() {
    this.selectedChange.emit(false);
  }

  public item = input.required<DashboardItem>();
  public selected = input<boolean>(false);
  public selectedChange = output<boolean>();

  public currentPropertyValue = computed(() => {
    return this.item()[SortedPropertyKeys[this.currentPropertyIndex()]];
  });

  public currentPropertyToken = computed(() => {
    return SortedPropertyKeys[this.currentPropertyIndex()];
  });

  public currentPropertyIndex = signal<number>(0);

  constructor() {
    effect(() => {
      if (!this.selected()) {
        this.currentPropertyIndex.set(0);
      }
    }, { allowSignalWrites: true });
  }
}
