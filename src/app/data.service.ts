import { Injectable } from '@angular/core';

export interface App {
  icon?: string;
  name: string;
  description: string;
  tags: string[];
  link?: string;
  screenshots?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  groups: { [key: string]: any } = {};
  loaded = false;
  complete = false;

  apps: { [key: string]: App } = {
    moments: {
      name: 'Moments',
      description: 'A simple collage app.',
      tags: ['paid', 'desktop', 'photo'],
    },
    notes: {
      name: 'Notes',
      icon: 'notes.png',
      description: 'A feature rich nostr client.',
      tags: ['free', 'web', 'nostr'],
      link: 'https://notes.blockcore.net',
    },
    basilar: {
      name: 'Basliar',
      description:
        'Tree tasks and no more. Plan one day ahead. Tomorrow is a new day.',
      tags: ['paid', 'web', 'tasks'],
    },
    blur: {
      name: 'Blur',
      icon: 'blur.png',
      description:
        'Blurs any photos. Useful for backgrounds, wallpapers and more.',
      tags: ['free', 'web', 'photo'],
      screenshots: ['blur2.webp', 'blur3.webp', 'blur1.webp'],
      link: 'https://blur.brainbox.no',
    },
    ariton: {
      name: 'Ariton',
      icon: 'ariton.png',
      description: 'Community Super App',
      tags: ['paid', 'web', 'community'],
      link: 'https://ariton.app',
    },
  };

  constructor() {}

  // Method to flatten groups to unique entries
  private flattenGroups(): any[] {
    const uniqueEntries = new Set<any>();
    for (const key in this.groups) {
      if (this.groups.hasOwnProperty(key)) {
        this.groups[key].forEach((entry: any) => uniqueEntries.add(entry));
      }
    }
    return Array.from(uniqueEntries);
  }

  // Method to check if an entry with the given recordId is unique
  private isUniqueRecordId(recordId: string): boolean {
    const flattenedGroups = this.flattenGroups();
    const recordIds = flattenedGroups.map((entry) => entry.id);
    return recordIds.filter((id) => id === recordId).length <= 1;
  }

  // Method to filter and find the entry with the supplied recordId
  entry(recordId: string): any {
    if (!this.isUniqueRecordId(recordId)) {
      throw new Error(`Record ID ${recordId} is not unique.`);
    }

    const flattenedGroups = this.flattenGroups();
    return flattenedGroups.find((entry) => entry.id === recordId);
  }
}
