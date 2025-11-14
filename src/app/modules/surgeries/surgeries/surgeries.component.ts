import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-surgeries',
  templateUrl: './surgeries.component.html',
  styleUrls: ['./surgeries.component.css']
})
export class SurgeriesComponent {

    rpCarouselOptions: OwlOptions = {
    loop: true,
    margin: 28,          // equals your card gap
    dots: true,
    nav: false,
    // navText: ['‹', '›'], // simple arrows; style via CSS below
    responsive: {
      0:   { items: 1 }, // mobile
      576: { items: 2 }, // small tablets
      992: { items: 2.4 }  // desktop
    }
  };
}
