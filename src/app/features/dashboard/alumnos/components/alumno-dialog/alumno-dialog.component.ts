import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../../../../../interfaces/Alumno.Interface';
import { generateRandomId } from '../../../../../shared/utils';

@Component({
  selector: 'app-alumno-dialog',
  templateUrl: './alumno-dialog.component.html',
  styleUrl: './alumno-dialog.component.scss'
})
export class AlumnoDialogComponent {
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<AlumnoDialogComponent>, @Inject(MAT_DIALOG_DATA) public editingAlumno?: Alumno) {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      Apellido: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      estaAprobado: [true, [Validators.required]]
    });

    if(this.editingAlumno) {
      console.log('editando', editingAlumno);
      this.alumnoForm.patchValue(this.editingAlumno);
    }
  }

  onSave(): void {
    console.log(this.alumnoForm.value);
    if(this.alumnoForm.valid) {
      this.matDialogRef.close({
        ...this.alumnoForm.value,
        codigo: this.editingAlumno != null ? this.editingAlumno.codigo : generateRandomId(6),
      });
    } else {
      this.alumnoForm.markAllAsTouched();
      alert('Formulario invalido');
    }
  }
}
