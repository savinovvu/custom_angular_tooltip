import {
  AfterContentInit, Directive, ElementRef, EventEmitter, Inject, Input, Output
} from '@angular/core';

@Directive({
  selector: '[drawWindow]'
})
export class DrawWindowDirective implements AfterContentInit {

  @Input('drawWindow')
  mouseY: number;

  constructor(private element: ElementRef, @Inject('Window') private window: Window) {
  }

  ngAfterContentInit(): void {
    this.setDefaultStyles();
    this.setPositionStyle();
  }

  private setPositionStyle() {
    const scrollHeight = this.element.nativeElement.offsetHeight;
    const showInTop = (this.window.innerHeight / 2) < this.mouseY;
    if (showInTop) {
      const topShift = -((scrollHeight + 6));
      this.element.nativeElement.style.top = `${topShift}px`;
    } else {
      this.element.nativeElement.style.top = '26px';
    }
  }

  private setDefaultStyles() {
    this.element.nativeElement.style.position = 'absolute';
    this.element.nativeElement.style.zIndex = 1;
    this.element.nativeElement.style.backgroundColor = 'white';
    this.element.nativeElement.style.width = '270px';
    this.element.nativeElement.style.boxShadow =
      '0 4px 8px 0 rgba(0, 0, 0, 0.2),' +
      '0 10px 20px 0 rgba(0, 0, 0, 0.5),' +
      '0 -1px 8px 0 rgba(0, 0, 0, 0.2)';
    this.element.nativeElement.style.borderRadius = '2px';
    this.element.nativeElement.style.padding = '20px';
    this.element.nativeElement.style.paddingRight = '15px';
  }

}
