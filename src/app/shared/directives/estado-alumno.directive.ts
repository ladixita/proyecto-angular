import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEstadoAlumno]'
})
export class EstadoAlumnoDirective {

  @Input() set appEstadoAlumno(estado: boolean) {
    if (estado) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
      // this.el.nativeElement.innerHTML += ' ✔️'; // Agrega un ícono de verificación
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
      // this.el.nativeElement.innerHTML += ' ❌'; // Agrega un ícono de error
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

}
