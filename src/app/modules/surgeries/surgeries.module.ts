import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurgeriesComponent } from './surgeries/surgeries.component';
import { SurgeriesRoutingModule } from './surgeries-routing.module';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    SurgeriesComponent
  ],
  imports: [
    CommonModule,
    SurgeriesRoutingModule,
    RouterModule,
    CarouselModule
  ]
})
export class SurgeriesModule { }
