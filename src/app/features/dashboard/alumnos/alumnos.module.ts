import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { AlumnoDialogComponent } from './components/alumno-dialog/alumno-dialog.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnoDialogComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule
  ],
  exports: [AlumnosComponent]
})
export class AlumnosModule { }
