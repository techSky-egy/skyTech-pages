import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M2SurgicalComponent } from './m2-surgical/m2-surgical.component';
import { S1ProComponent } from './s1-pro/s1-pro.component';
import { LaserFiberComponent } from './laser-fiber/laser-fiber.component';
import { ProductsRoutningModule } from './product-routing.module';
import { AccessoriesComponent } from './accessories/accessories.component';
import { RouterModule } from '@angular/router';
import { S1ProPlusComponent } from './s1-pro-plus/s1-pro-plus.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { K12Component } from './k12/k12.component';



@NgModule({
  declarations: [
    M2SurgicalComponent,
    S1ProComponent,
    LaserFiberComponent,
    AccessoriesComponent,
    S1ProPlusComponent,
    K12Component
  ],
  imports: [
    CommonModule,
    ProductsRoutningModule,
    RouterModule,
    CarouselModule
  ]
})
export class ProductsModule { }
