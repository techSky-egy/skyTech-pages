import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-k12',
  templateUrl: './k12.component.html',
  styleUrls: ['./k12.component.css']
})
export class K12Component {

   // ✅ Carousel options
  carouselOpts: OwlOptions = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 600,
    margin: 16,           // space between slides
    stagePadding: 0,      // can add 24–40 for peeking
    autoHeight: true,
    // rtl: true,         // uncomment if your page is RTL
    responsive: {
      0:    { items: 1 },   // phones
      576:  { items: 1 },   // small phones / small tablets
      768:  { items: 2 },   // tablets
      992:  { items: 3.2 },   // desktops
      1400: { items: 3.2 }    // large desktops
    }
  };

   cards = [
    { img: 'assets/images/pro-plus/400μm fiber.svg',      title: '400μm fiber ', text: '' },
    { img: 'assets/images/pro-plus/Fiber Tips.svg',      title: 'Fiber Tips', text: '' },
    { img: 'assets/images/pro-plus/Lipo Handpiece.svg',       title: 'Lipo Handpiece',             text: '' },
    { img: 'assets/images/pro-plus/Lipo Handpiece Pro.svg',       title: 'Lipo Handpiece Pro',             text: '' }
    // add more items as needed…
  ];

  // Scroll-only, no nav, no dots; touch/mouse draggable with a small “peek”
   carouselAccessoriesOpts: OwlOptions = {
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

  // ✅ Your cards as data (you can keep paths as-is)
  clinicalApps = [
    {
      img: 'assets/images/pro-plus/fac--.svg',
      title: 'Face (cheek, jawline, under eye)',
      text: `Precise facial contouring and skin tightening without injectables — ideal for
             jawline definition and under-eye rejuvenation.`
    },
    {
      img: 'assets/images/pro-plus/Neck & Chin.svg',
      title: 'Neck & Chin',
      text: `Effective double-chin reduction and neck lifting through deep collagen stimulation
             and subdermal tightening.`
    },
    {
      img: 'assets/images/pro-plus/Arms.svg',
      title: 'Arms',
      text: `Smooths and firms sagging upper arms by targeting localized fat and boosting dermal elasticity.`
    },
    {
      img: 'assets/images/pro-plus/Abdomen.svg',
      title: 'Abdomen',
      text: `Non-invasive fat reduction and skin retraction for a firmer, more toned abdominal profile.`
    },
    {
      img: 'assets/images/pro-plus/Inner Thighs.svg',
      title: 'Inner Thighs / Knees',
      text: `Targets localized fat and supports tightening for a smoother contour.`
    }
  ];

   galleryOpts: OwlOptions = {
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 600,
    margin: 24,                // spacing between images
    autoHeight: false,
    lazyLoad: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    // rtl: true,              // ← uncomment if your page is RTL
    responsive: {
      0:    { items: 1 },
      576:  { items: 2 },
      768:  { items: 3.2 },
      1200: { items: 4.2 }
    }
  };

  // your images  ← replace with real paths
  images: string[] = [
    'assets/images/pro-plus/-1.svg',
    'assets/images/pro-plus/-2.svg',
    'assets/images/pro-plus/-3.svg',
    'assets/images/pro-plus/-4.svg',
    'assets/images/pro-plus/-5.svg'
  ];
}
