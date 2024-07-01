import { DashboardScreenComponent } from './dashboard-screen.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DashboardScreenService } from './dashboard-screen.service';
import { featureKey } from '../../../stores/dashboard';

describe('DashboardScreenComponent', () => {
  let store: MockStore;
  let component: DashboardScreenComponent;
  let fixture: ComponentFixture<DashboardScreenComponent>;

  const initialState = {
    [featureKey]: {
      isLoading: true,
      items: [],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardScreenComponent],
      providers: [provideMockStore({ initialState }), DashboardScreenService],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(DashboardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DashboardScreenComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('my enchanted items');
  });

  it('should display the loading text after render', async () => {
    const fixture = TestBed.createComponent(DashboardScreenComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    await fixture.whenRenderingDone();
    expect(compiled.textContent).toContain('loading');
  });
});
