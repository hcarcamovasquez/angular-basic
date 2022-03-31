import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarComponent} from "./car.component";
import {RouterModule} from "@angular/router";
import {carRouting} from "./car.routing";
import { ListComponent } from './components/list/list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [CarComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(carRouting),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarModule { }
