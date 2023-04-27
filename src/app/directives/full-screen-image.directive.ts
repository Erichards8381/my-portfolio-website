import { Directive, ElementRef, HostListener } from '@angular/core';
import {JitEvaluator} from '@angular/compiler'

@Directive({
  selector: '[appFullScreenImage]'
})
export class FullScreenImageDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    if (document.fullscreenEnabled) {
      if (!document.fullscreenElement) {
        this.el.nativeElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  }
}
