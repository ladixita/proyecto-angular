import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { AlumnoPipePipe } from './pipes/alumno-pipe.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { AprobadoPipe } from './pipes/aprobado.pipe';
import { EstadoAlumnoDirective } from './directives/estado-alumno.directive';
import { EstadoIconoDirective } from './directives/estado-icono.directive';

const ANGULAR_MODULES = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatTableModule,
  MatSelectModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule
]

@NgModule({
  declarations: [
    EstadoIconoDirective,
    AlumnoPipePipe,
    AprobadoPipe,
    EstadoAlumnoDirective
  ],
  imports: [
    CommonModule,
    ANGULAR_MODULES
  ],
  exports: [
    ANGULAR_MODULES,
    AlumnoPipePipe,
    AprobadoPipe,
    EstadoIconoDirective,
    EstadoAlumnoDirective
  ]
})
export class SharedModule { }
