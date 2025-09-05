import Statistic from "./pages/Statistic.svelte";
import StatisticIcon from './assets/icons/statistic.svg?raw';
import History from "./pages/History.svelte";
import HistoryIcon from './assets/icons/history.svg?raw';
import Checklists from "./pages/Checklists.svelte";
import ChecklistsIcon from './assets/icons/checklists.svg?raw';
import Settings from "./pages/Settings.svelte";
import SettingsIcon from './assets/icons/settings.svg?raw';

import type {Component} from 'svelte';
import Main from "./pages/Main.svelte";

export enum AppRoute {
  Main = 'main',
  Statistic = 'statistic',
  History = 'history',
  Checklists = 'checklists',
  Settings = 'settings'
}

export type RouteInfo = {
  component: Component;
  icon: any;
};

export const routes: Record<AppRoute, RouteInfo> = {
  [AppRoute.Main]: {
    component: Main,
    icon: ''
  },
  [AppRoute.Statistic]: {
    component: Statistic,
    icon: StatisticIcon
  },
  [AppRoute.History]: {
    component: History,
    icon: HistoryIcon
  },
  [AppRoute.Checklists]: {
    component: Checklists,
    icon: ChecklistsIcon
  },
  [AppRoute.Settings]: {
    component: Settings,
    icon: SettingsIcon
  },
};
