import { DashboardItem } from '../../../domain/dashboard/dashboard.models';

export interface DashboardScreenVM {
  isLoading: boolean;
  error?: string;
  items: DashboardItem[];
}
