import { Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  template: `
    <div class="preloader">
      <img src="loading.gif" alt="Loading..." />
    </div>
  `,
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {

}
