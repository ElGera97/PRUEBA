import {Component, OnInit, ViewChild,} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
import {MarcaComponent} from './marca/marca.component';
import {ModeloComponent} from './modelo/modelo.component';
import {ApiService} from './services/api.service';


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'prueba';

  displayedColumns: string[] = [ 'descripcion', 'id'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginatorC: MatPaginator;
  @ViewChild(MatSort) sortC: MatSort;


  constructor(public dialog: MatDialog, private api: ApiService) {
  }

  ngOnInit(): void {
    this.showAllMarcas();
    this.showAllModelos();
    }

  // Funcion para mostrar ventana emergente
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });

  }

  openDialogMarca() {
    this.dialog.open(MarcaComponent, {
      width: '30%',
    });
  }

  openDialogModelo() {
    this.dialog.open(ModeloComponent, {
      width: '25%',
    });
  }

  // Mostrar productos
  showAllMarcas() {
    const errorGet = 'No se pudo obtener la informacion';
    this.api.getMarca().subscribe({
      next: (res) => {
        //Mostrar array  en MatTableDataSource
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginatorC;
        this.dataSource.sort = this.sortC;

        console.log(res);
      },
      error: (error) => {
        alert(errorGet);
      }
    });
  }

  showAllModelos() {
    const errorGet = 'No se pudo obtener la informacion';
    this.api.getModelo().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        alert(errorGet);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
