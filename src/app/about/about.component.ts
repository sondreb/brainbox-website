import { CommonModule, KeyValuePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, KeyValuePipe, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  sanitizer = inject(DomSanitizer);

  data = inject(DataService);

  loading = true;
}
