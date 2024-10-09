import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEstadoIcono]'
})
export class EstadoIconoDirective {
  @Input() set appEstadoIcono(estado: boolean) {
    const iconName = estado ? 'check_circle' : 'error';
    this.renderer.setProperty(this.el.nativeElement, 'innerText', iconName);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

}