import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  // @ViewChild('themeToggle') toggleButton!: ElementRef;
  // @ViewChild('screenshotLight') screenshotLight!: ElementRef;
  // @ViewChild('screenshotDark') screenshotDark!: ElementRef;

  theme = inject(ThemeService);

  ngAfterViewInit() {
    // const lightIcon = document.getElementById('light-icon');
    // const darkIcon = document.getElementById('dark-icon');

    // if (
    //   !lightIcon ||
    //   !darkIcon ||
    //   !this.toggleButton?.nativeElement ||
    //   !this.screenshotLight?.nativeElement ||
    //   !this.screenshotDark?.nativeElement
    // ) {
    //   console.warn('Some theme elements were not found');
    //   return;
    // }

    // console.log('SCREENSHOT LIGHT:', this.screenshotLight.nativeElement);
    // console.log('SCREENSHOT DARK:', this.screenshotDark.nativeElement);

    // const htmlElement = document.documentElement;

    // this.toggleButton.nativeElement.addEventListener('click', () => {

    //   this.theme.toggle();

    //   console.log('CLICKED!!!');

    //   if (htmlElement.getAttribute('data-theme') === 'dark') {
    //     htmlElement.removeAttribute('data-theme');
    //     htmlElement.style.setProperty('color-scheme', 'light');

    //     lightIcon.setAttribute('display', 'inline-block');
    //     darkIcon.setAttribute('display', 'none');

    //     this.screenshotLight.nativeElement.classList.remove('hidden');
    //     this.screenshotDark.nativeElement.classList.add('hidden');

    //     console.log('IFF');

    //   } else {
    //     htmlElement.setAttribute('data-theme', 'dark');
    //     htmlElement.style.setProperty('color-scheme', 'dark');

    //     lightIcon.setAttribute('display', 'none');
    //     darkIcon.setAttribute('display', 'inline-block');

    //     // this.screenshotLight.nativeElement.classList.add('hidden');
    //     // this.screenshotDark.nativeElement.classList.remove('hidden');

    //     this.screenshotLight.nativeElement.classList.add('hidden');
    //     this.screenshotDark.nativeElement.classList.remove('hidden');

    //     console.log('ELSE')
    //   }
      
    //   console.log(this.screenshotLight.nativeElement.classList);
    //   console.log(this.screenshotDark.nativeElement.classList);

    //   this.screenshotDark.nativeElement.classList.remove('hidden');
    //   console.log(this.screenshotDark.nativeElement);
    // });

    // const darkModeMediaQuery = window.matchMedia(
    //   '(prefers-color-scheme: dark)'
    // );
    // let darkMode = darkModeMediaQuery.matches;

    // darkIcon.setAttribute('display', 'none');
  }
}
