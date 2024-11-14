import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  sanitizer = inject(DomSanitizer);

  data = inject(DataService);

  title = 'app';

  entries: any[] = [];

  groups: { [key: string]: any } = {};

  loading = true;

  entry: any;

  id: string | null;

  labels: string[] = [];

  app: any;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID from route:', this.id);
  }

  async load(id: keyof DataService['apps'] | null) {
    console.log('SHOW APP:', id);
    if (!id) {
      this.app = null;
    } else {
      this.app = this.data.apps[id];
    }

    // const entry = this.data.entry(recordId!);
    // if (entry) {
    //   this.entry = entry;
    //   this.loading = false;
    //   return;
    // }

    // if (!did) {
    //   console.warn('No DID provided');
    //   return;
    // }

    // if (!recordId) {
    //   console.warn('No Record ID provided');
    //   return;
    // }

    // if (typeof Web5 !== 'undefined') {
    //   console.log('Web5 is available:', Web5);
    //   // You can now use Web5 here
    // } else {
    //   console.error('Web5 is not available');
    // }

    // const { web5, did: userDid } = await Web5.Web5.connect();
    // console.log(web5, userDid);

    // // const urlParams = new URLSearchParams(window.location.search);
    // // const did = urlParams.get('did');

    // console.log('From DID:', did);

    // const response = await web5.dwn.records.read({
    //   from: did,
    //   message: {
    //     filter: {
    //       recordId: recordId,
    //       // protocol: 'https://schema.ariton.app/text',
    //       // protocolPath: 'entry',
    //       // schema: 'https://schema.ariton.app/text/schema/entry',
    //       // dataFormat: 'application/json',
    //     },
    //   },
    // });

    // console.log('Response:', response.record);

    // if (response.record) {
    //   const record = response.record;
    //   console.log('REcord:', record);

    //   const data = await record.data.json();

    //   const entry = {
    //     record,
    //     data,
    //     id: record.id,
    //   };

    //   this.entry = entry;
    // }

    // this.loading = false;
  }

  sanitizeHtml(html: string): SafeHtml {
    if (!html) {
      return '';
    }
    
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit() {
    this.load(this.id);
  }
}
