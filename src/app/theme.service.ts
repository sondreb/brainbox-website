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

    // First check local storage
    const savedTheme = localStorage.getItem('color-scheme');
    if (savedTheme) {
      this.theme.set(savedTheme);
    } else {
      // If no saved theme, check system preference
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      let darkMode = darkModeMediaQuery.matches;

      if (darkMode) {
        this.theme.set('dark');
      }

      darkModeMediaQuery.addEventListener('change', (event) => {
        darkMode = event.matches;
        // Only update theme if there's no saved preference
        if (!localStorage.getItem('color-scheme')) {
          this.theme.set(darkMode ? 'dark' : 'light');
        }
      });
    }
  }

  activate() {
    console.log('Theme is now:', this.theme);

    const backgroundColor = this.dark() ? 'rgb(13, 12, 12)' : 'rgb(255, 255, 255)';

    if (this.dark()) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }

    // Update theme-color meta tag
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', backgroundColor);
  }

  toggle() {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);
    localStorage.setItem('color-scheme', newTheme);
  }
}
