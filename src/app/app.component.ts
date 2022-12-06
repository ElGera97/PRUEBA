import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MarcaComponent } from './marca/marca.component';
import { ModeloComponent } from './modelo/modelo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prueba';

  constructor(public dialog: MatDialog) {}

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
}
