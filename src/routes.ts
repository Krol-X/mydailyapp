import type {Component} from 'svelte';
import Main from "./pages/Main.svelte";

export enum AppRoute {
  Main = 'main'
}

export type RouteInfo = {
  component: Component;
  icon: any;
};

export const routes: Record<AppRoute, RouteInfo> = {
  [AppRoute.Main]: {
    component: Main,
    icon: ''
  }
};
