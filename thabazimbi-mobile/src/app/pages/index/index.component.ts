import { Component, OnInit } from '@angular/core';
import 'slick-carousel';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
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
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 835,
          settings: {
            slidesToShow: 2,
          },
        }
      ]
    });
  }
}
