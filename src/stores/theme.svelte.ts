export type ThemeMode = 'light' | 'dark';

export class Theme {
  state = $state('light');

  #setThemeData(theme: string) {
    const body = document?.querySelector('body');

    if (body) {
      body.dataset['theme'] = theme;
    }
  }

  get current(): string {
    return this.state;
  }

  switch(newTheme: string | undefined = undefined): string {
    if (newTheme) {
      this.state = newTheme;
    } else {
      this.state = (this.state === 'light') ? 'dark' : 'light';
    }

    this.#setThemeData(this.state);

    return this.state;
  }
}

export let theme = new Theme();
