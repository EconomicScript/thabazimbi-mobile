import { Component, OnInit } from '@angular/core';
import 'slick-carousel';   

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  ngOnInit() {
    this.initSlickCarousel();
  }

  initSlickCarousel() {
    $('.carousel').slick({
      slidesToShow: 3.5,
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