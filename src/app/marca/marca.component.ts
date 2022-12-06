import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss'],
})
export class MarcaComponent implements OnInit {
  marcaForm!: FormGroup;

  constructor(private formBuilde: FormBuilder) {}

  ngOnInit(): void {
    // FOrma para agregar identificadores a la modal
    this.marcaForm = this.formBuilde.group({
      marcaName: ['', Validators.required],
    });
  }

  guardarMarca() {
    console.log('hola');
  }
}
