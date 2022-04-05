import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
 /* {
    path: '',
    loadChildren: () => import('./page/car/car.module').then(m => m.CarModule)
  }*/
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cars'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'cars',
        loadChildren: () => import('./page/car/car.module').then(m => m.CarModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
