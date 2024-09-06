import { Component } from '@angular/core';
import 'slick-carousel';

@Component({
  selector: 'app-deluxe',
  templateUrl: './deluxe.component.html',
  styleUrls: ['./deluxe.component.scss']
})
export class DeluxeComponent {
  ngOnInit() {
    this.initSlickCarousel();
  }

  initSlickCarousel() {
    $('.carousel').slick({
      slidesToShow: 2.5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        }
      ]
    });
  }

  selectedTab = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
}
