import {AppRoute, routes} from "../routes";

export class Page {
  state: AppRoute = $state<AppRoute>(AppRoute.Main);

  get current(): AppRoute {
    return this.state;
  }

  get icon(): string {
    return routes[this.state].icon;
  }

  goto(page?: AppRoute) {
    if (page) {
      this.state = page;
    }
  }
}

export let page = new Page();
