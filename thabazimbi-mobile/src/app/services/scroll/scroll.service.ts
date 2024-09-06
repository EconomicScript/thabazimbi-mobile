import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(private router: Router) { 
    //
  }

  scrollTop() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0); // Scrolls to the top on router navigation
      });
  }
  scrollToNextSection(section: HTMLElement | null) {
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}