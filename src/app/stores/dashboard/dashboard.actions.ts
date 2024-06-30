import { DashboardItem } from '../../domain/dashboard/dashboard.models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const DashboardActions = createActionGroup({
  source: '[DASHBOARD]',
  events: {
    'Load enchanted items': emptyProps(),
    'Load enchanted items success': props<{ items: DashboardItem[] }>(),
    'Load enchanted items error': props<{ error: string }>(),
  },
});
