import { DashboardItem } from '../../domain/dashboard/dashboard.models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const DashboardActions = createActionGroup({
  source: '[DASHBOARD]',
  events: {
    'Get enchanted items': emptyProps(),
    'Get enchanted items success': props<{ items: DashboardItem[] }>(),
    'Get enchanted items error': props<{ error: string }>(),
  },
});
