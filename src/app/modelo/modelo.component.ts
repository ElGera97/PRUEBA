import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss']
})
export class ModeloComponent implements OnInit {

  modeloForm!: FormGroup;

  constructor(private formBuilde: FormBuilder, private api: ApiService,
              private modeloRefer: MatDialogRef<ModeloComponent>) {
  }

  ngOnInit(): void {
    this.modeloForm = this.formBuilde.group({
      descripcion: ['', Validators.required],
      cilindros: ['', Validators.required],
      modelo: ['', Validators.required],
      puertas: ['', Validators.required],
      marca: ['', Validators.required],
    });
  }

  guardarModelo() {
    const addSuccesFull = 'Se agrego correctamente';
    const addFailed = 'Se produjo un error';
    if(this.api.postModelo(this.modeloForm.value).subscribe({
      next: (res)=>{
        alert(addSuccesFull);
        this.modeloForm.reset();
        this.modeloRefer.close('save');
    },
      error: ()=>{
        alert(addFailed)
      }
    }))
    console.log(this.modeloForm.value);

  }
}
