import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mz',
  templateUrl: './mz.component.html',
  styleUrls: ['./mz.component.css']
})
export class MzComponent {

  accessories = [
    { img: 'assets/images/mz/4/Surgery Handpiece.svg',        title: 'Surgery Handpiece' },
    { img: 'assets/images/mz/4/Focusing Handpiece.svg',       title: 'Focusing Handpiece' },
    { img: 'assets/images/mz/4/Gynecology Handpiece.svg',     title: 'Gynecology Handpiece' },
    { img: 'assets/images/mz/4/Lipo Handpiece Pro.svg',       title: 'Lipo Handpiece Pro' },
    { img: 'assets/images/mz/4/Bare Fiber.svg',               title: 'Bare Fiber' },
    { img: 'assets/images/mz/4/Conical Fiber.svg',            title: 'Conical Fiber' },
    { img: 'assets/images/mz/4/Radial Fiber.svg',             title: 'Radial Fiber' },
    { img: 'assets/images/mz/4/Fiber Stripper & Cutter.svg',  title: 'Fiber Stripper & Cutter' },
    { img: 'assets/images/mz/4/Safety goggles.svg',           title: 'Safety Goggles' },
  ];

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
      0:   { items: 1, stagePadding: 0, margin: 0 },
      576: { items: 2.2, stagePadding: 0, margin: 0 },
      992: { items: 3.2, stagePadding: 0, margin: 0 }
    }
  };
}
