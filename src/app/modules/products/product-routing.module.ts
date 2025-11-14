import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { M2SurgicalComponent } from "./m2-surgical/m2-surgical.component";
import { S1ProComponent } from "./s1-pro/s1-pro.component";
import { LaserFiberComponent } from "./laser-fiber/laser-fiber.component";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { S1ProPlusComponent } from "./s1-pro-plus/s1-pro-plus.component";
import { K12Component } from "./k12/k12.component";

const routes: Routes = [
  {
    path: 'm2-surgical',
    component: M2SurgicalComponent
  },
  {
    path: 's1-pro',
    component: S1ProComponent
  },
  {
    path: 'laser-fiber',
    component: LaserFiberComponent
  },
  {
    path: 'accessories',
    component: AccessoriesComponent
  },
  {
    path: 's1-pro-plus',
    component: S1ProPlusComponent
  },
  {
    path: 'k12',
    component: K12Component
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutningModule { }
