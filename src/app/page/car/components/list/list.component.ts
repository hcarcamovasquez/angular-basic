import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ICars} from "../../../../core/models/interfeces/ICars";
import {Car} from "../../../../core/models/classes/Car";
import {v4 as uuidv4} from 'uuid'
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {IDialogCardUpset} from "../../models/interfaces/IDialogCardUpset";

@Component({
  selector: 'car-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'brand',
    'color',
    'model',
    'year',
    'actions',
  ];
  pagaSize = [5, 10, 25, 100];

  dataSource: MatTableDataSource<ICars> = new MatTableDataSource<ICars>()

  carList: ICars[] = [
    new Car(uuidv4(), 'AUDI', 'rojo', 'B45', 1991),
    new Car(uuidv4(), 'MERCEDES BENZ', 'gris', 'B65', 2008),
    new Car(uuidv4(), 'PEUGEOT', 'rojo', 'C59', 209),
    new Car(uuidv4(), 'CHEVROLET', 'azul', 'B11', 2022),
    new Car(uuidv4(), 'TOYOTA', 'blanco', 'C34', 2050),
    new Car(uuidv4(), 'CITROEN', 'amarillo', 'C3', 3075),
    new Car(uuidv4(), 'OPEL', 'blanco', 'H23', 2011),
  ]

  constructor(
    public dialog: MatDialog
  ) {
    this.dataSource.data = this.carList
  }

  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openUpdateDialog(item: ICars) {
    const data : IDialogCardUpset = {
      item
    }

    this.dialog.open(DialogComponent,{
      data
    })
  }
}
