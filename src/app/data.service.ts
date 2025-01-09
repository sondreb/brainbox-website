import { Injectable } from '@angular/core';

export interface App {
  icon?: string;
  name: string;
  description: string;
  tags: string[];
  link?: string;
  screenshots?: string[];
  source?: string;
  body?: string;
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
      icon: 'moments.jpg',
      description: 'A simple collage app.',
      tags: ['paid', 'desktop', 'photo'],
      link: 'https://moments.brainbox.no',
      source: 'https://github.com/sondreb/Moments',
    },
    notes: {
      name: 'Notes',
      icon: 'notes.png',
      description: 'A feature rich nostr client.',
      tags: ['free', 'web', 'nostr'],
      link: 'https://notes.blockcore.net',
      source: 'https://github.com/block-core/blockcore-notes',
    },
    daily: {
      name: 'Daily',
      icon: 'daily.png',
      description:
        'Tree tasks and no more. Plan one day ahead. Tomorrow is a new day.',
      tags: ['paid', 'web', 'tasks'],
      link: 'https://daily.brainbox.no',
      source: 'https://github.com/sondreb/daily',
    },
    blur: {
      name: 'Blur',
      icon: 'blur.png',
      description:
        'Blurs any photos. Useful for backgrounds, wallpapers and more.',
      tags: ['free', 'web', 'photo'],
      screenshots: ['blur2.webp', 'blur3.webp', 'blur1.webp'],
      link: 'https://blur.brainbox.no',
      source: 'https://github.com/sondreb/blur',
    },
    ariton: {
      name: 'Ariton',
      icon: 'ariton.png',
      description: 'Community Super App',
      tags: ['paid', 'web', 'community'],
      link: 'https://ariton.app',
      source: 'https://github.com/block-core/ariton',
    },
    dreams: {
      name: 'Dreams',
      icon: 'dreams.jpg',
      description: 'Dreams Journaling',
      body: 'An app that helps users log and analyze their dreams, offering insights and identifying recurring themes or symbols.',
      tags: ['free', 'web', 'dreams'],
      link: 'https://dreams.brainbox.no',
      source: 'https://github.com/sondreb/dreams',
    },
    gaianet: {
      name: 'Gaianet',
      icon: 'gaianet.png',
      description: 'Gaianet Database App',
      body: 'An app that you can install on your device to have quick access to the amazing Gaianet database.',
      tags: ['free', 'web', 'regeneration', 'database'],
      link: 'https://gaianet.brainbox.no',
      source: 'https://github.com/sondreb/gaianet',
    },
    bsn: {
      name: 'Blockchain Social Network',
      icon: 'bsn.png',
      description: 'Social Network on Stellar Blockchain',
      tags: ['free', 'web', 'blockchain', 'social'],
      link: 'https://bsn.brainbox.no',
      source: 'https://github.com/sondreb/bsn',
    },
    polytalk: {
      name: 'Polytalk',
      icon: 'polytalk.png',
      description: 'Learn the basics of every language in the world',
      tags: ['free', 'web', 'language'],
      link: 'https://polytalk.me',
      source: 'https://github.com/sondreb/polytalk',
    },
    cocreators: {
      name: 'Map of Co-creators',
      icon: 'cocreators.png',
      description: 'Find other Co-creators globally with this map app',
      tags: ['free', 'web', 'map'],
      link: 'https://cocreators.brainbox.no',
      source: 'https://github.com/sondreb/co-creators-map',
    },
    people: {
      name: 'People',
      icon: 'people.png',
      description:
        "Wonderful app to keep your people's information in one place",
      tags: ['free', 'web', 'organization'],
      link: 'https://people.brainbox.no',
      source: 'https://github.com/sondreb/people',
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
