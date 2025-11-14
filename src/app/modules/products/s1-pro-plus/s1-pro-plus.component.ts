import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-s1-pro-plus',
  templateUrl: './s1-pro-plus.component.html',
  styleUrls: ['./s1-pro-plus.component.css']
})
export class S1ProPlusComponent {

 cards = [
    { img: 'assets/images/pro-plus/2-ring radial fiber.svg',      title: '2–ring radial fiber (primary)', text: '' },
    { img: 'assets/images/pro-plus/Bare fiber (980nm).svg',       title: 'Bare fiber (980nm)',             text: '' },
    { img: 'assets/images/pro-plus/2-ring radial fiber.svg',      title: '2–ring radial fiber (primary)', text: '' },
    { img: 'assets/images/pro-plus/Bare fiber (980nm).svg',       title: 'Bare fiber (980nm)',             text: '' },
    { img: 'assets/images/pro-plus/2-ring radial fiber.svg',      title: '2–ring radial fiber (primary)', text: '' },
    // add more items as needed…
  ];

  // Scroll-only, no nav, no dots; touch/mouse draggable with a small “peek”
   carouselOpts: OwlOptions = {
    loop: true,
    dots: true,
    nav: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    slideBy: 2,
    smartSpeed: 350,
    autoWidth: false,
    margin: 0,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0:   { items: 1, stagePadding: 0, margin: 0  },
      576: { items: 2.2, stagePadding: 0, margin: 0 },
      992: { items: 3.2, stagePadding: 0, margin: 0 }
    }
  };
}
