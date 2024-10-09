import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alumnoPipe'
})
export class AlumnoPipePipe implements PipeTransform {

  transform(value: boolean | string): string {
    if (typeof value === 'boolean') {
      return value ? this.getCheckIcon() : this.getXIcon();
    } else if (typeof value === 'string') {
      return value === 'Si' ? this.getCheckIcon() : this.getXIcon();
    }
    return '';
  }

  private getCheckIcon(): string {
    return 'check_circle';
  }

  private getXIcon(): string {
    return 'error';
  }

}
