import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarComponent} from "./car.component";
import {RouterModule} from "@angular/router";
import {carRouting} from "./car.routing";
import {ListComponent} from './components/list/list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {DialogComponent} from './components/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [CarComponent, ListComponent, DialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(carRouting),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class CarModule {
}
