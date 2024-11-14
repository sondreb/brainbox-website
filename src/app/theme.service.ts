import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal('light');

  light = computed(() => this.theme() == 'light');

  dark = computed(() => this.theme() == 'dark');

  constructor() {
    effect(() => {
      const theme = this.theme();
      console.log('EFFECT:', theme);
      this.activate();
    });

    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    let darkMode = darkModeMediaQuery.matches;

    if (darkMode) {
      this.theme.set('dark');
    }

    darkModeMediaQuery.addEventListener('change', (event) => {
      darkMode = event.matches;
      if (darkMode) {
        this.theme.set('dark');
      } else {
        this.theme.set('light');
      }
    });
  }

  activate() {
    console.log('Theme is now:', this.theme);

    if (this.theme() === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }
  }

  toggle() {
    if (this.theme() === 'light') {
      this.theme.set('dark');
    } else {
      this.theme.set('light');
    }
  }
}
