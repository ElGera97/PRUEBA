import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss'],
})
export class MarcaComponent implements OnInit {
  marcaForm!: FormGroup;

  constructor(private formBuilde: FormBuilder, private api: ApiService,
              private marcaRefer: MatDialogRef<MarcaComponent>) {
  }

  ngOnInit(): void {
    // FOrma para agregar identificadores a la modal
    this.marcaForm = this.formBuilde.group({
      marcaName: ['', Validators.required],
    });
  }

  guardarMarca() {
    const addSuccesFull = 'Se agrego correctamente';
    const addFailed = 'Se produjo un error';

    if (this.marcaForm.valid) {
      this.api.postMarcas(this.marcaForm.value).subscribe({
        next: (res) => {
          alert(addSuccesFull);
          this.marcaForm.reset();
          this.marcaRefer.close();

        },
        error: () => {
          alert(addFailed);
        },
      });
    }
    console.log(this.marcaForm.value);
  }
}
